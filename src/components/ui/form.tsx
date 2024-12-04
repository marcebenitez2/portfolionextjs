"use client";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !subject || !message) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Por favor, introduce un correo electrónico válido.");
      return;
    }

    setError("");

    const serviceID = "service_j7bvfqq";
    const templateID = "template_flxurbg";
    const publicKey = "SrXxAldR5RwaYNF6_";

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
            Hablemos!
          </h2>
          <p className="text-neutral-600 text-sm mt-2 dark:text-neutral-300">
            Si tienes alguna pregunta, sugerencia o simplemente quieres saludar,{" "}
            <span className="text-neutral-800 dark:text-neutral-200">
              enviarme un mensaje!
            </span>
          </p>
        </motion.div>

        <form className="mt-8" onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
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
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                placeholder="Hola! tenemos una vacante para desarrollador Fullstack abierta, podríamos organizar un meet para conocernos."
                onChange={(e) => setMessage(e.target.value)}
              />
            </LabelInputContainer>
            <motion.div whileTap={{ scale: 0.95 }}>
              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Enviar mensaje &rarr;
                <BottomGradient />
              </button>
            </motion.div>
          </motion.div>
        </form>
      </motion.div>
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
