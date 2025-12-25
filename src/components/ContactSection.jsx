import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,

} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useEffect, useState } from "react";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageInfo, setMessageInfo] = useState(initialState)


useEffect(() => emailjs.init('NlM1E4Feuz8GWzGkg'), [])
  const handleSubmit = async (e) => {
    e.preventDefault();

    const serviceId = 'service_j0spe7a'
    const templateId = 'template_dhg98yn'

    try{
      await emailjs.send(serviceId, templateId, {
          from_name: messageInfo.name,
          from_email: messageInfo.email,
          from_message: messageInfo.message
      })
      // alert('Viesti lähetetty')
          setTimeout(() => {
      toast({
        title: "Viesi lähetetty!",
        description: "Kiitos viestistä. Otan pian yhteyttä",
      });
      setIsSubmitting(false);
    }, 1500);
  } catch (error) {
      console.log(error)
  } finally {
      setMessageInfo(initialState)
  }

    // setIsSubmitting(true);

    // setTimeout(() => {
    //   toast({
    //     title: "Viesi lähetetty!",
    //     description: "Kiitos viestistä. Otan pian yhteyttä",
    //   });
    //   setIsSubmitting(false);
    // }, 1500);
  };

  const onNameChange = (event) => { //nimi-inputin muutokset
    setMessageInfo({ ...messageInfo, name: event.target.value })
  }
  const onEmailChange = (event) => { //email-inputin muutokset
    setMessageInfo({ ...messageInfo, email: event.target.value })
  }
  const onMessageChange = (event) => { //message-inputin muutokset
    setMessageInfo({ ...messageInfo, message: event.target.value })
  }
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Ota <span className="text-primary"> Yhteyttä</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Yhteystiedot
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    elsa.kaulanen@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-9">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Puhelin</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +358 (0) 50 3022972
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-13">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Sijainti</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Kempele, Suomi
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/elsa-maria-kaulanen-10b7711a1/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.facebook.com/elsamaria.kaulanen" target="_blank">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/elsamariakaulanen/" target="_blank">
                  <Instagram />
                </a>

              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            // onSubmit={handleSubmit}
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit = {handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Name
                </label>
                <input
                  value={messageInfo.name}
                  onChange={onNameChange}

                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Irmeli..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Email
                </label>
                <input
                  value={messageInfo.email}
                  onChange={onEmailChange}
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="irmeli@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {" "}
                  Your Message
                </label>
                <textarea
                  value={messageInfo.message}
                  onChange={onMessageChange}
                  id="message"
                  name="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hei, haluaisin keskustella..."
                />
              </div>

              <button
                type="submit"
                // disabled={isSubmitting}

                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {/* {isSubmitting ? "Sending..." : "Send Message"} */}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};