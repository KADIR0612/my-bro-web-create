import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { CalendarDays, CheckCircle2, Phone, User, MapPin, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PHONE, PHONE_DISPLAY, TEL_LINK } from "@/components/site/contact-info";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book Electrician | Zuber Shaikh | Ahmedabad" },
      {
        name: "description",
        content:
          "Book Zuber Shaikh, ITI-qualified electrician in Ahmedabad. Fill your name, number, address, date and service type — fast home, shop & commercial electrical work.",
      },
      { property: "og:title", content: "Book Electrician | Zuber Shaikh | Ahmedabad" },
      {
        property: "og:description",
        content:
          "Book electrician service in Ahmedabad. Wiring, MCB, inverter, fitting, repair and more. Call/WhatsApp +91 84888 97375.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const serviceOptions = [
  "Ghar ki complete wiring",
  "Fan, light & fitting",
  "MCB, DB & panel board",
  "Inverter & stabilizer",
  "Shop & showroom wiring",
  "Commercial & office wiring",
  "Repair & fault finding",
  "Decorative lighting",
  "Safety check",
  "Other / Multiple work",
];

const bookingSchema = z.object({
  name: z.string().min(2, "Naam kam se kam 2 characters ka ho"),
  phone: z
    .string()
    .min(10, "Phone number 10 digits ka hona chahiye")
    .regex(/^\d{10}$/, "Sirf 10 digits daalein"),
  address: z.string().min(10, "Poora address daalein"),
  date: z.string().min(1, "Date select karein"),
  service: z.string().min(1, "Service type select karein"),
});

type BookingValues = z.infer<typeof bookingSchema>;

function BookPage() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      date: "",
      service: "",
    },
  });

  const selectedService = watch("service");

  const onSubmit = (values: BookingValues) => {
    const message = [
      "Namaste Zuber bhai, mujhe electrician ka kaam karwana hai.",
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Address: ${values.address}`,
      `Date: ${values.date}`,
      `Service: ${values.service}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <section className="border-b border-border bg-surface">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Book Now
          </p>
          <h1 className="mt-3 text-5xl md:text-6xl">Electrician Booking</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Neeche form bhar do — Zuber bhai aapka call ya WhatsApp confirm kar lenge aur
            fixed time pe pahunch jayenge.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 rounded-xl border border-border bg-card p-6 md:p-8"
            noValidate
          >
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <User className="size-4 text-primary" /> Aapka Naam
              </Label>
              <Input
                id="name"
                placeholder="Jaise: Rahul Sharma"
                {...register("name")}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="size-4 text-primary" /> Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="10 digit mobile number"
                {...register("phone")}
                aria-invalid={errors.phone ? "true" : "false"}
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="flex items-center gap-2">
                <MapPin className="size-4 text-primary" /> Poora Address
              </Label>
              <Textarea
                id="address"
                rows={3}
                placeholder="Ghar/shop number, area, landmark, Ahmedabad"
                {...register("address")}
                aria-invalid={errors.address ? "true" : "false"}
              />
              {errors.address && (
                <p className="text-sm text-destructive">{errors.address.message}</p>
              )}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <CalendarDays className="size-4 text-primary" /> Kaam ki Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  min={today}
                  {...register("date")}
                  aria-invalid={errors.date ? "true" : "false"}
                />
                {errors.date && (
                  <p className="text-sm text-destructive">{errors.date.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Wrench className="size-4 text-primary" /> Kaunsa Kaam
                </Label>
                <Select
                  value={selectedService}
                  onValueChange={(value) => setValue("service", value, { shouldValidate: true })}
                >
                  <SelectTrigger aria-invalid={errors.service ? "true" : "false"}>
                    <SelectValue placeholder="Service select karein" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && (
                  <p className="text-sm text-destructive">{errors.service.message}</p>
                )}
              </div>
            </div>

            <Button
              type="submit"
              className="w-full gap-2 text-base font-bold"
              disabled={isSubmitting}
            >
              <CheckCircle2 className="size-5" /> WhatsApp Pe Confirm Karein
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              Form bharne ke baad WhatsApp khulega. Wahan se details bhej dein.
            </p>
          </form>

          <div className="space-y-8">
            <div className="rounded-xl border border-border bg-surface p-6 md:p-8">
              <h2 className="text-2xl">Direct Call Bhi Kar Sakte Hain</h2>
              <p className="mt-2 text-muted-foreground">
                Agar urgent hai toh seedha call karein — 7 days available.
              </p>
              <a
                href={TEL_LINK}
                className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="size-5" /> {PHONE_DISPLAY}
              </a>
            </div>

            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <h3 className="text-xl">Kya Fill Karein?</h3>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>Apna naam aur active mobile number</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>Poora address — ghar number, area, landmark</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>Jis din kaam chahiye woh date</span>
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>Kaunsa electrical kaam hai — wiring, fitting, MCB, etc.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
