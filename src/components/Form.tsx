import { FC } from "react";

interface FormProps {
    title: string;
    description: string;
    rating: number;
    location: string; // Add the location prop
    setTitle: (value: string) => void;
    setDescription: (value: string) => void;
    setRating: (value: number) => void;
    setLocation: (value: string) => void; // Add the setLocation prop
    handleSubmit: () => void;
}

const ReviewForm: FC<FormProps> = ({
    title,
    description,
    rating,
    location,
    setTitle,
    setDescription,
    setRating,
    setLocation,
    handleSubmit,
}) => {
    const formSubmit = (e: any) => {
        e.preventDefault();
        if (rating < 0 || rating > 10) {
            alert("Rating must be between 0 and 10.");
            return;
        }
        handleSubmit();
    };
    return (
        <form
            className="shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={(e) => formSubmit(e)}
        >
            <div className="w-full max-w-xs">
                {/* ... (other form inputs) */}

                <div className="mb-4">
                    <label className="block text-gray-400 text-sm font-bold mb-2">
                        Location
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="location"
                        type="text"
                        placeholder="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                </div>

                {/* ... (other form inputs) */}

                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Submit
                </button>
            </div>
        </form>
    );
};

export default ReviewForm;