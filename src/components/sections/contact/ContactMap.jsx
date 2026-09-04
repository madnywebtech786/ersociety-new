import { Reveal } from "../../ui/Reveal";

export function ContactMap() {
  return (
    <section className="bg-background pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal>
          <div className="relative h-80 w-full overflow-hidden rounded-md sm:h-96 lg:h-112">
            <iframe
              title="Ebenezer Relief Society location in Calgary, Alberta"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d321200.49227131513!2d-114.087835!3d51.027623299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170039f843fd5%3A0x266d3bb1b652b63a!2sCalgary%2C%20AB!5e0!3m2!1sen!2sca!4v1788345577700!5m2!1sen!2sca"
              className="absolute inset-0 h-full w-full border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
