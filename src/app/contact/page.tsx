"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";
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
    name: string().required("Required"),
    email: string().email("Invalid email address").required("Required"),
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
    <>
      {/* <!--================Contact Area =================--> */}
      <section className="contact_area section_gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="contact_info">
                <div className="info_item">
                  <i className="lnr lnr-home"></i>
                  <h6>California, United States</h6>
                  <p>Santa monica bullevard</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-phone-handset"></i>
                  <h6>
                    <a href="#">00 (440) 9865 562</a>
                  </h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
                <div className="info_item">
                  <i className="lnr lnr-envelope"></i>
                  <h6>
                    <a href="#">support@colorlib.com</a>
                  </h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <form
                className="row contact_form"
                action="contact_process.php"
                method="post"
                id="contactForm"
                noValidate
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      {...register("name")}
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      {...register}
                    />
                    <div className="invalid-feedback">Please choose a username.</div>
                  </div>
                  <div className="form-group">
                    <input
                      {...register("email")}
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter email address"
                      {...register}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      {...register("subject")}
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Enter Subject"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <textarea
                      {...register("message")}
                      className="form-control"
                      name="message"
                      id="message"
                      rows={1}
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12 text-right">
                  <button type="submit" value="submit" className="primary_btn">
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            id="mapBox"
            className="mapBox"
            data-lat="40.701083"
            data-lon="-74.1522848"
            data-zoom="13"
            data-info="PO Box CT16122 Collins Street West, Victoria 8007, Australia."
            data-mlat="40.701083"
            data-mlon="-74.1522848"
          ></div>
        </div>
      </section>
      {/* <!--================Contact Area =================--> */}
    </>
  );
}
