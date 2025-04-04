import { motion } from "framer-motion";
import { useAuthStore } from "../store/authStore";
import { formatDate } from "../utils/date";
import LeftNavbar from "../components/LeftNavBar";

const ProfilePage = () => {
    const { user, logout } = useAuthStore();

    const handleLogout = () => {
        logout();
    };

    return (
        <div className="h-screen w-full flex">
            <div className="min-w-[300px]">
                <LeftNavbar />
            </div>
            <div className="w-full h-full flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md w-full h-fit mx-auto mt-10 p-8 bg-white bg-opacity-90 rounded-xl shadow-2xl border border-gray-300"
                >
                    <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-600 text-transparent bg-clip-text">
                        Profile
                    </h2>

                    <div className="space-y-6">
                        <motion.div
                            className="p-4 bg-gray-100 bg-opacity-80 rounded-lg border border-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <h3 className="text-xl font-semibold text-green-500 mb-3">
                                Profile Information
                            </h3>
                            <p className="text-gray-800">Name: {user.name}</p>
                            <p className="text-gray-800">Email: {user.email}</p>
                        </motion.div>
                        <motion.div
                            className="p-4 bg-gray-100 bg-opacity-80 rounded-lg border border-gray-300"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <h3 className="text-xl font-semibold text-green-500 mb-3">
                                Account Activity
                            </h3>
                            <p className="text-gray-800">
                                <span className="font-bold">Joined: </span>
                                {new Date(user.createdAt).toLocaleDateString(
                                    "en-US",
                                    {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    }
                                )}
                            </p>
                            <p className="text-gray-800">
                                <span className="font-bold">Last Login: </span>
                                {formatDate(user.lastLogin)}
                            </p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-4"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={handleLogout}
                            className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
                            font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
                            focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-white"
                        >
                            Logout
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default ProfilePage;
