"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { object, string } from "yup";

type FormData = {
  subject?: string | undefined;
  message?: string | undefined;
  name: string;
  email: string;
};

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const validationSchema = object().shape({
    name: string().required("Bitte Name eingeben."),
    email: string().required("Bitte Email Adresse eingeben."),
    subject: string(),
    message: string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
  });

  // Form submission handler
  const onSubmit = async (data: FormData) => {
    // Do something with the form data
    console.log("data");
    // const data = new FormData(data);
    try {
      setIsLoading(true);
      const response = await fetch("/api/contact", {
        method: "post",
        body: JSON.stringify(data),
      });
      setIsLoading(false);
      console.log("response", response);

      if (!response.ok) {
        throw new Error(`Invalid response: ${response.status}`);
      }
      router.push("/contact/success");
    } catch (err) {
      setIsLoading(false);
      alert("We can't submit the form, try again later?");
    }
  };

  return (
    <section className="contact_area section_gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="contact_info">
              <div className="info_item">
                <i className="lnr lnr-home"></i>
                <h6>Regus - Vienna, Messecarree</h6>
                <p>Ausstellungsstraße 50/C /2 OG, 1020 Wien</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-phone-handset"></i>
                <h6>
                  <a href="#">(+43) 676 945 75 66</a>
                </h6>
                <p>Mo. bis Fr. 9am to 6 pm</p>
              </div>
              <div className="info_item">
                <i className="lnr lnr-envelope"></i>
                <h6>
                  <a href="#">andreas.siedler@gmail.com</a>
                </h6>
                <p>Senden Sie mir jederzeit eine Anfrage!</p>
              </div>
            </div>
          </div>
          <div className="col-lg-9">
            <form
              className="row contact_form"
              id="contactForm"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="col-md-6">
                <div className="form-group">
                  <input
                    {...register("name")}
                    type="text"
                    className={clsx("form-control", errors.name && "is-invalid")}
                    id="name"
                    name="name"
                    placeholder="Name"
                    {...register}
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
                </div>
                <div className="form-group">
                  <input
                    {...register("email")}
                    type="email"
                    className={clsx("form-control", errors.email && "is-invalid")}
                    id="email"
                    name="email"
                    placeholder="Email Adresse"
                    {...register}
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>
                <div className="form-group">
                  <input
                    {...register("subject")}
                    type="text"
                    className={clsx("form-control", errors.subject && "is-invalid")}
                    id="subject"
                    name="subject"
                    placeholder="Betreff"
                  />
                  {errors.subject && (
                    <div className="invalid-feedback">{errors.subject.message}</div>
                  )}
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <textarea
                    {...register("message")}
                    className={clsx("form-control", errors.message && "is-invalid")}
                    name="message"
                    id="message"
                    rows={1}
                    placeholder="Nachricht"
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message.message}</div>
                  )}
                </div>
              </div>
              <div className="col-md-12 text-right">
                <button type="submit" value="submit" className="primary_btn">
                  <span>Nachricht senden</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
