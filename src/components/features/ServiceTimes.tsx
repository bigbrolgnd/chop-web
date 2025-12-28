import { Clock, Calendar, Heart } from 'lucide-react';

interface ServiceTime {
  icon: typeof Clock;
  day: string;
  time: string;
  name: string;
  description: string;
}

const services: ServiceTime[] = [
  {
    icon: Calendar,
    day: 'Sunday',
    time: '10:00 AM',
    name: 'Sunday Worship',
    description: 'Join us for praise, worship, and the Word'
  },
  {
    icon: Clock,
    day: 'Wednesday',
    time: '7:00 PM',
    name: 'Bible Study',
    description: 'Dig deeper into Scripture together'
  },
  {
    icon: Heart,
    day: 'Saturday',
    time: '9:00 AM',
    name: 'Community Outreach',
    description: 'Serving our neighbors in need'
  }
];

function ServiceTimes() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-sm uppercase font-semibold tracking-widest text-brand-blue mb-3">
            Join Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Service Times
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 mx-auto">
            We gather throughout the week for worship, study, and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-brand-blue/10 flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
              <p className="text-brand-gold font-semibold mb-2">
                {service.day} • {service.time}
              </p>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceTimes;
