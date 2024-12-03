"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Aquí usamos emailjs para enviar el mensaje
    const serviceID = "service_j7bvfqq";
    const templeteID = "template_flxurbg";
    const publicKey = "SrXxAldR5RwaYNF6_";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templeteID, templateParams, publicKey)
      .then((response) => {
        console.log(
          "Email enviado correctamente",
          response.status,
          response.text
        );
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        console.error("Error al enviar el email", error);
      });
  };

  return (
    <div className="px-4">
      <div className="max-w-6xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Hablemos
        </h2>
        <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
          Si tienes alguna pregunta, sugerencia o simplemente quieres saludar,
          ¡no dudes en{" "}
          <span className="text-neutral-800 dark:text-neutral-200">
            {" "}
            enviarme un mensaje!
          </span>
        </p>

        <form className="mt-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Nombre completo</Label>
            <Input
              id="name"
              placeholder="Mario Bodini"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="ejemplo@ejemplo.com"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="subject">Asunto</Label>
            <Input
              id="subject"
              placeholder="Prueba técnica"
              type="text"
              onChange={(e) => setSubject(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Hola! tenemos una vacante para desarrollador Fullstack abierta, podriamos organizar un meet para conocernos"
              onChange={(e) => setMessage(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Enviar mensaje &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

{
  /* <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" /> */
}
