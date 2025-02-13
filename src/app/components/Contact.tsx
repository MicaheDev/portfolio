import { ArrowRightTopIcon } from "pixicons";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <div className="min-h-dvh h-auto w-full sticky top-0 mt-[200px] border-t-4 border-black flex flex-col justify-center items-center gap-4 px-4 py-8" id="contact">
      <h2 className="special-title">Send me a message</h2>
      <form className="flex flex-col gap-4 w-3/4 text-2xl max-lg:w-full">
        <input
          type="text"
          placeholder="Name"
          className="border-2 border-black/30  py-4 px-8 "
        />
        <input
          type="text"
          placeholder="Email"
          className="border-2 border-black/30  py-4 px-8 "
        />

        <textarea
          placeholder="Message"
          className="border-2 border-black/30  py-4 px-8  h-[400px]"
        ></textarea>

        <div className="w-full flex items-center justify-end">
          <Button title="Send" containerClass="!bg-black !text-white" rightIcon={<ArrowRightTopIcon className="w-6 h-6"/>} />
        </div>
      </form>
    </div>
  );
}
