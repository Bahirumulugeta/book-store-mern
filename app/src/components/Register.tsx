"use client"
import React, { ChangeEvent, FormEvent, useState } from 'react'
interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

const Register = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });
    // Update the state when input values change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data submitted:', formData)
    };



    return (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
            <div className="w-full bg-white rounded-lg md:mt-0 sm:max-w-md xl:p-0 shadow-md">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Create and account
                    </h1>
                    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-zinc-950">First Name</label>
                            <input
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-zinc-950 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-zinc-950">Last Name</label>
                            <input
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-zinc-950 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400"
                                placeholder="Doe"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-zinc-950">Your email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-zinc-950 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400"
                                placeholder="name@company.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-zinc-950">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="bg-gray-50 border border-gray-300 text-zinc-950 sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 placeholder-gray-400"
                                placeholder="**********"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full text-white bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-centerfocus:ring-primary">
                            Sign Up
                        </button>
                        <p className="text-sm font-light text-gray-500">
                            Already have an account? <a href="/login" className="font-medium text-primary hover:underline">Login here</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register