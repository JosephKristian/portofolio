const ContactSection = ({ addButtonToRefs }) => {
  const phone = '6285156677092'; // tanpa tanda plus, sesuai format wa.me
  const contactMessage = encodeURIComponent(
    'Halo, saya tertarik untuk konsultasi mengenai proyek website atau aplikasi. Mohon info lebih lanjut.'
  );
  const scheduleMessage = encodeURIComponent(
    'Halo, saya ingin menjadwalkan panggilan untuk berdiskusi lebih lanjut tentang kebutuhan pengembangan aplikasi.'
  );

  return (
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
        Let's Build Something Exceptional
      </h2>
      <p className="text-blue-100 max-w-2xl mx-auto mb-10 text-lg">
        Whether you need a complex web application, performance optimization, or architectural guidance, I'm ready to bring your vision to life.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href={`https://wa.me/${phone}?text=${contactMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          ref={addButtonToRefs}
          className="px-8 py-4 rounded-xl bg-white text-blue-600 font-bold hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
        >
          Contact Me
        </a>
        <a
          href={`https://wa.me/${phone}?text=${scheduleMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          ref={addButtonToRefs}
          className="px-8 py-4 rounded-xl bg-transparent border-2 border-white text-white font-bold hover:bg-white/10 transition-colors shadow-lg hover:shadow-xl"
        >
          Schedule a Call
        </a>
      </div>
    </div>
  );
};

export default ContactSection;
