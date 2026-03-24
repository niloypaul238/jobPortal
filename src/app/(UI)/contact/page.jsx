import { Phone, Mail, MapPin } from "lucide-react";
import Form from "@/app/Component/Form";

const Contact = () => {


    return (
        <div className="md:w-10/12 mx-auto px-6 py-12">

            {/* Top Contact Info */}

            <div className="grid md:grid-cols-3 gap-6 p-4 rounded-lg bg-gray-100 mb-12">

                <div className="flex items-center gap-4  p-6 rounded-lg">
                    <span className="bg-white p-6 rounded"><Phone className="text-green-500" /></span>
                    <div>
                        <h3 className="font-semibold">Call Us:</h3>
                        <p className="text-sm text-gray-500">(00) 568 975 468</p>
                        <p className="text-sm text-gray-500">+88 465 748 937</p>
                    </div>
                </div>

                <div className="flex items-center gap-4  p-6 rounded-lg">
                    <span className="bg-white p-6 rounded">
                        <Mail className="text-green-500" />
                    </span>
                    <div>
                        <h3 className="font-semibold">Email:</h3>
                        <p className="text-sm text-gray-500">youremail@gmail.com</p>
                        <p className="text-sm text-gray-500">demoemail@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-center gap-4 p-6 rounded-lg">
                    <span className="bg-white p-6 rounded">
                        <MapPin className="text-green-500" />
                    </span>
                    <div>
                        <h3 className="font-semibold">Address:</h3>
                        <p className="text-sm text-gray-500">Sunset Beach</p>
                        <p className="text-sm text-gray-500">North Carolina (NC), 28468</p>
                    </div>
                </div>

            </div>

            {/* Form + Map */}
            <Form />

        </div>
    );
};

export default Contact;