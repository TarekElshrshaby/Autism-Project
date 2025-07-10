import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGoogle, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-primary-50 text-black py-5">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center text-center relative">
        {/* Contact Us Section */}
        <div className="flex-1 text-center">
          <p className="mb-2 font-bold">تواصل معنا</p>
          <a href="mailto:support@example.com" className="text-black no-underline">
            support@example.com
          </a>
        </div>

        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-12 bg-black opacity-40"></div>

        {/* Follow Us Section */}
        <div className="flex-1 text-center">
          <p className="mb-2 font-bold">تابعنا على</p>
          <div className="flex gap-2 justify-center">
            <a href="#" className="text-black no-underline">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="text-black no-underline">
              <FontAwesomeIcon icon={faGoogle} size="lg" />
            </a>
            <a href="#" className="text-black no-underline">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Rights Reserved */}
      <div className="text-center mt-2">
        <p className="m-0">جميع الحقوق محفوظة</p>
      </div>
    </footer>
  );
}