import { Button } from "../../../components/ui/button";
import Image from "next/image";
import doctorImage from "../../../../public/doctor-hero.png";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 pt-20 sm:px-6 lg:px-8">
        <main className="flex items-center justify-center">
          <article className="flex-[2] max-w-3xl space-y-8 flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-bold max-w-2xl tracking-tight">
              Encontre os melhores profissionais em um unico local!
            </h1>
            <p className="text-base md:text-lg text-gray-600">
              Nós somos um plataforma para profissionais da saúde com foco em
              agilizar seu atendimento de forma simplifiada.
            </p>
            <Button className="bg-emerald-500 hover: bg-emerald-600 w-fit px-6 font-semibold">
              Encontre uma clinica
            </Button>
          </article>

          <div className="hidden lg:block ">
            <Image
              src={doctorImage}
              alt="Foto Ilustratva e um doutor"
              width={340}
              height={400}
              objectFit="object-contain"
              quality={100}
              priority={true}
            />
          </div>
        </main>
      </div>
    </section>
  );
}
