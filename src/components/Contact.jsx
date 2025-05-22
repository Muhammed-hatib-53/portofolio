import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github } from 'lucide-react';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Ad Soyad gereklidir';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta gereklidir';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Geçerli bir e-posta adresi giriniz';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mesaj gereklidir';
    }
    
    return newErrors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validate();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'E-posta',
      value: 'muhammedhatib039@gmail.com',
      link: 'mailto:muhammedhatib039@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      title: 'Telefon',
      value: '+90 534 264 08 03',
      link: 'tel:+905342640803'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Adres',
      value: 'Balıkesir, Türkiye',
      link: 'https://maps.google.com/?q=Balikesir,Turkey'
    }
  ];

  return (
    <section 
      id="contact" 
      className={`py-20 transition-colors duration-500 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-2 ${
            darkMode ? 'text-pink-400' : 'text-pink-600'
          }`}>
            İletişim
          </h2>
          <div className={`h-1 w-20 mx-auto rounded ${
            darkMode ? 'bg-pink-400' : 'bg-pink-600'
          }`}></div>
          <p className={`mt-4 max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Projeleriniz ve işbirliği fırsatları için benimle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className={`rounded-lg shadow-lg p-8 transition-colors duration-500 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <h3 className={`text-xl font-bold mb-6 ${
              darkMode ? 'text-gray-200' : 'text-gray-800'
            }`}>
              Mesaj Gönderin
            </h3>
            
            {submitSuccess ? (
              <div className={`p-4 rounded-lg mb-6 ${
                darkMode ? 'bg-green-800 text-green-200' : 'bg-green-100 text-green-800'
              }`}>
                Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapılacaktır.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label 
                    htmlFor="name" 
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-pink-500'
                    } ${errors.name ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="email" 
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-pink-500'
                    } ${errors.email ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label 
                    htmlFor="message" 
                    className={`block mb-2 text-sm font-medium ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}
                  >
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-gray-700 text-white border-gray-600 focus:border-pink-500' 
                        : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-pink-500'
                    } ${errors.message ? (darkMode ? 'border-red-500' : 'border-red-500') : ''}`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-pink-500 hover:bg-pink-600' 
                      : 'bg-pink-600 hover:bg-pink-700'
                  } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : (
                    <>
                      <Send size={18} />
                      Gönder
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info */}
          <div>
            <div className={`rounded-lg shadow-lg p-8 mb-8 transition-colors duration-500 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className={`p-3 rounded-full mr-4 ${
                      darkMode ? 'bg-gray-700 text-pink-400' : 'bg-pink-100 text-pink-600'
                    }`}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className={`text-lg font-medium ${
                        darkMode ? 'text-gray-300' : 'text-gray-800'
                      }`}>
                        {info.title}
                      </h4>
                      <a 
                        href={info.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`transition-colors duration-300 ${
                          darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'
                        }`}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Social Media */}
            <div className={`rounded-lg shadow-lg p-8 transition-colors duration-500 ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-bold mb-6 ${
                darkMode ? 'text-gray-200' : 'text-gray-800'
              }`}>
                Sosyal Medya
              </h3>
              
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/905342640803" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.273-.101-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.091 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.345m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375c-.99-1.576-1.516-3.391-1.516-5.26 0-5.445 4.455-9.885 9.942-9.885a9.865 9.865 0 0 1 7.021 2.91 9.788 9.788 0 0 1 2.909 6.99c-.004 5.444-4.46 9.885-9.935 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.893c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 0 0 5.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/Muhammed-hatib-53" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.facebook.com/mhmd.khtyb.957259?mibextid=ZbWKwL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/muhammed__hatib?igsh=MWxuYWc0aGdreWxtOA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                      : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                  }`}
                  aria-label="Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;