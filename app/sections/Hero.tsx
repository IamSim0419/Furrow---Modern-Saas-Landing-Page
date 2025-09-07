import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <main
      id="/"
      style={{
        backgroundImage: "url('/bgImgStars.jpg')",
      }}
      className="relative h-screen bg-cover bg-center flex justify-center items-center overflow-x-clip"
    >
      <div className="container mx-auto px-4 relative lg:mt-12">
        <div className="flex justify-center">
          <div className="py-1 px-3 bg-gradient-to-r from-[#f6f4eb] via-[#91c8e4] to-[#749bc2] rounded-full text-neutral-950 font-semibold">
            ✨ $8.6 seed has raised
          </div>
        </div>

        <h1
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-4
          md:mt-5 "
        >
          <span className="">Seamless design</span>,<br />
          made simple
        </h1>
        <p className="text-center text-xl text-white/70 mt-6 max-w-2xl mx-auto">
          Design tools should empower your creativity, not interrupt it. Furrow
          brings powerful features together with an intuitive interface to keep
          you in the zone.
        </p>

        <form
          action=""
          className="flex border border-white/50 rounded-full p-2 mt-8 md:max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 flex-1 w-full rounded-full"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            className="whitespace-nowrap ml-2"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </main>
  );
}
