import { z } from "zod";

export const forgotPasswordSchema = z.object({
  mail: z.string().email("Introduce un correo electrónico válido."),
});
