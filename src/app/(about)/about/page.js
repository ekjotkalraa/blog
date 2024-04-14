// import AboutCoverSection from "@/src/components/About/AboutCoverSection";
// import Skills from "@/src/components/About/Skills";
// import Link from "next/link";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      {/* <AboutCoverSection />
      <Skills /> */}
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        I’m Ekjot Kalra, currently in 12th grade purusing commerce with maths
        and I’m passionate about looking at all scales of problems through new
        perspectives. I’ve always found joy and growth in interacting with
        people who have different backgrounds, experiences, and opinions to me.
        In and outside of class, I love to learn new things; right now, I’m in
        all sorts of business, venture capital and finance stuff, but I’m also
        learning music, poetry, and cold mailing! Regardless of what I do,
        though, I’m always on the lookout to meet interesting people and learn
        interesting things. Throughout the years to come, I aim to use this
        curiosity and my skills in business to optimise some of the problems
        faced by individuals, firms, and societies.
        {/* <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen. */}
      </h2>
    </>
  );
}
