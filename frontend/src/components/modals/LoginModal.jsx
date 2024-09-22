import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';

const LoginModal = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
        


    if (!isOpen) return null;

    return (
        <motion.div
            className="bg-white dark:bg-dark-bg p-6 rounded-lg shadow-lg w-full max-w-md animate-slideInUp"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Login</h2>
            <form  className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-black dark:text-text-light mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="mt-1 block w-full p-2 rounded-md border border-gray-300 bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-black dark:text-text-light mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mt-1 block w-full p-2 rounded-md border border-gray-300 bg-white dark:bg-gray-700 text-black dark:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                    />
                </div>
                <div className="flex justify-between space-x-2">
                    <button type="submit" className="bg-purple text-white px-4 py-2 rounded shadow hover:bg-dark-purple transition duration-300 ease-in-out">
                        Login
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-700 transition duration-300 ease-in-out"
                    >
                        Close
                    </button>
                </div>
            </form>
        </motion.div>
    );
};


export default LoginModal;