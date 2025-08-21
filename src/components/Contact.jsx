import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

import { createClient } from "@supabase/supabase-js";
import ReCAPTCHA from "react-google-recaptcha";

const SUPABASE_URL = "https://wngdyuvcyiseauwxyqrs.supabase.co";        // Remplace par ton URL

// Remplace par ta clé publique supabase
// Tu peux la trouver dans ton tableau de bord Supabase sous "Settings" > "API"
// Assure-toi de ne pas exposer ta clé secrète dans le frontend
// Pour des raisons de sécurité, utilise uniquement la clé publique dans le frontend
// La clé publique est généralement utilisée pour les opérations côté client
// et la clé secrète est utilisée côté serveur.
const TA_CLE_PUBLIQUE = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InduZ2R5dXZjeWlzZWF1d3h5cXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ5MTI1NTIsImV4cCI6MjA3MDQ4ODU1Mn0.ZPHckuntDXDABdLdS55eEuWs6elk520SHOeud1blE_0";
const SUPABASE_ANON_KEY = TA_CLE_PUBLIQUE;  

 // Ta clé reCAPTCHA v2
// Remplace par ta clé reCAPTCHA v2
// Tu peux obtenir une clé reCAPTCHA v2 en te rendant sur le site de Google reCAPTCHA
// Assure-toi de configurer correctement le domaine autorisé pour éviter les erreurs
// La clé reCAPTCHA v2 est utilisée pour protéger ton formulaire contre les spams
// Elle est généralement utilisée pour valider les soumissions de formulaires
// et empêcher les robots de soumettre des données automatiquement.
// La clé reCAPTCHA v2 est différente de la clé reCAPTCHA v3,
// qui est utilisée pour une approche plus avancée de la protection contre les spams.
// La clé reCAPTCHA v2 est généralement utilisée pour les formulaires de contact,
// les commentaires, ou toute autre interaction utilisateur où une validation est nécessaire.
const TA_CLE_SITE_RECAPTCHA = "6Le3m6IrAAAAAHs75Vw77f695Fr-vHBF04I0ricR"; //CLE_v3
// const TA_CLE_SITE_RECAPTCHA = "6LfQv6IrAAAAAID6fZ9_P4bwoeRpjDaHh2cFRFH2"; //CLE_v2
const RECAPTCHA_SITE_KEY = TA_CLE_SITE_RECAPTCHA;  

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const Contact = ({ t }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const recaptchaRef = useRef(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle form submission here
  //   console.log('Form submitted:', formData);
  // };

  const handleChange = (e) => {
    // setFormData({
    //   ...formData,
    //   [e.target.name]: e.target.value
    // });
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = await recaptchaRef.current.executeAsync();
    recaptchaRef.current.reset();

    if (!token) {
      alert("Veuillez valider le reCAPTCHA.");
      setLoading(false);
      return;
    }

    const { error } = await supabase.from("portfolio-messages").insert([formData]);

    if (error) {
      alert("Erreur lors de l'envoi : " + error.message);
    } else {
      alert("Message envoyé avec succès !");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">Email</p>
                    <p className="text-gray-600 dark:text-gray-400">patrodevops20@email.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">{t.contact.info.phone}</p>
                    <p className="text-gray-600 dark:text-gray-400">+212 669688946</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="ml-4">
                    <p className="text-lg font-medium text-gray-900 dark:text-white">{t.contact.info.location}</p>
                    <p className="text-gray-600 dark:text-gray-400">Marrakech, Morocco</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t.contact.social.title}
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https:://github.com/PatroDev/patrodev_portfolio"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/patrodev"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-stone-200 dark:bg-gray-800 rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={t.contact.form.namePlaceholder}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    placeholder={t.contact.form.emailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.subject} *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder={t.contact.form.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {t.contact.form.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </div>

               <ReCAPTCHA
                  sitekey={RECAPTCHA_SITE_KEY}
                  size="invisible"
                  ref={recaptchaRef}
                />

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>{loading ? "Envoi..." : t.contact.form.send}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;