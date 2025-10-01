'use client';
import { useRouter } from 'next/navigation';

interface BookingFormProps {
  artist: string;
  category: string;
}

const BookingForm = ({ artist, category }: BookingFormProps) => {
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const contact = formData.get('contact') as string;
        const date = formData.get('date') as string;
        const time = formData.get('time') as string;

        const query = new URLSearchParams({
            name,
            contact,
            date,
            time,
            artist,
            category
        });

        router.push(`/confirmation?${query.toString()}`);
    };


  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
      <h2 className="text-3xl font-serif font-bold text-dark mb-2">Book Your Appointment</h2>
      <p className="text-gray-600 mb-6">with <span className="font-bold text-primary">{artist}</span> for <span className="font-bold text-primary">{category}</span></p>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Full Name</label>
        <input type="text" id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>

      <div className="mb-4">
        <label htmlFor="contact" className="block text-gray-700 text-sm font-bold mb-2">Email or Phone</label>
        <input type="text" id="contact" name="contact" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
          <input type="date" id="date" name="date" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div>
          <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Time</label>
          <input type="time" id="time" name="time" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>

      <button type="submit" className="w-full bg-primary text-dark font-bold py-3 px-4 rounded-lg hover:bg-opacity-80 transition duration-300">
        Submit Booking
      </button>
    </form>
  );
};

export default BookingForm;