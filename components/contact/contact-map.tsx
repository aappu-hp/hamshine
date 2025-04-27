export default function ContactMap() {
  return (
    <section className="h-[400px] w-full bg-gray-200 relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3914664041313!2d76.12623357484215!3d13.010724887308251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5491b01147933%3A0x830dbfe6566f4663!2sHAMSHINE%20ELECTRONICS%20AND%20ENERGY%20SYSTEM!5e0!3m2!1sen!2sin!4v1742144963879!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hamshine Electronics Location"
      ></iframe>
    </section>
  )
}

