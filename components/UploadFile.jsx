import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";
import { Button } from "./Button";
import { toast } from "react-hot-toast";
import { useUser } from "../hooks/useUser";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import useUploadModal from "../hooks/useUploadModal";
import uniqid from "uniqid";
import { useRouter } from "next/router";

export const UploadFile = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser();
  const { isOpen, onClose } = useUploadModal();
  const supabaseClient = useSupabaseClient();
  const router = useRouter();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      author: "",
      title: "",
      song: null,
      image: null,
    },
  });

  const onSubmit = async (values, e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const imageFile = values.image?.[0];
      const songFile = values.song?.[0];

      if (!imageFile || !songFile || !user) {
        toast.error("Faltan datos por añadir");
        return;
      }

      const uniqueID = uniqid();
      const { data: songData, error: songError } = await supabaseClient.storage
        .from("songs")
        .upload(`song-${values.title}-${uniqueID}`, songFile, {
          cacheControl: 3600,
          upsert: false,
        });

      if (songError) {
        console.log(songError);
        toast.error("Error al subir la canción");
        return;
      }

      const { data: imageData, error: imageError } =
        await supabaseClient.storage
          .from("images")
          .upload(`image-${values.title}-${uniqueID}`, imageFile, {
            cacheControl: 3600,
            upsert: false,
          });

      if (imageError) {
        toast.error("Error al subir la imagen");
        return;
      }

      const { error: supabaseError } = await supabaseClient
        .from("songs")
        .insert({
          user_id: user.id,
          title: values.title,
          author: values.author,
          image_path: imageData.path,
          song_path: songData.path,
        });

      if (supabaseError) {
        toast.error(supabaseError.message);
        return;
      }

      setIsLoading(false);
      toast.success("Canción subida correctamente");
      reset();
      onClose();
      router.reload();
    } catch (error) {
      toast.error("Error al subir la canción");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    reset();
  }, [isOpen]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        id="title"
        disabled={isLoading}
        {...register("title", { required: true })}
        placeholder="Titulo de la canción"
      />
      <Input
        id="author"
        disabled={isLoading}
        {...register("author", { required: true })}
        placeholder="Autor de la canción"
      />
      <div>
        <div className="pb-1">Selecciona una canción</div>
        <Input
          id="song"
          type="file"
          disabled={isLoading}
          accept=".mp3"
          {...register("song", { required: true })}
        />
      </div>
      <div>
        <div className="pb-1">Selecciona una portada</div>
        <Input
          id="image"
          type="file"
          disabled={isLoading}
          accept="image/*"
          {...register("image", { required: true })}
        />
      </div>
      <Button type="submit" disabled={isLoading}>
        AÑADIR CANCION
      </Button>
    </form>
  );
};
