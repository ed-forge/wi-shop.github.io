'use client'
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required("First name is required"),
        lastname: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        phone: Yup.string()
            .matches(/^\d{10}$/, "Phone number must be 10 digits")
            .required("Phone number is required"),
        company: Yup.string().required("Company name is required"),
        project: Yup.string().required("Please describe your project or requirement"),
        existingClient: Yup.string().required("This field is required"),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log("Form Submitted:", values);
        resetForm();
        alert("Thank you for reaching out! We'll get back to you soon.");
    };

    return (
        <section id="contact" className="py-24 bg-[#fdfaf6] dark:bg-black border-t border-neutral-200/60 dark:border-neutral-900 transition-colors duration-300">
            <div className="container mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row gap-16 lg:gap-24">
                <div className="flex-[4] flex flex-col">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.15em] uppercase text-red-700/80 dark:text-red-500/80 mb-6">
                            Start a Conversation
                        </p>
                        <h2 className="text-[2.5rem] md:text-[3.5rem] leading-[1.1] font-thin text-neutral-900 dark:text-white mb-8">
                            Bring us the mess.
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">
                            The overwhelm, the stalled traction, the tool that almost fits. We'll find the next proof milestone together and build the engine to hit it.
                        </p>
                    </div>

                    <div className="mt-auto border-t border-neutral-200 dark:border-neutral-800 pt-8">
                        <p className="text-sm font-semibold tracking-[0.1em] uppercase text-neutral-500 dark:text-neutral-600 mb-3">
                            Direct Support
                        </p>
                        <p className="text-2xl font-thin text-neutral-900 dark:text-white mb-1">
                            Baibhav Kumar
                        </p>
                        <p className="text-xl text-red-800 dark:text-red-500 font-thin">
                            +91 931515961
                        </p>
                    </div>
                </div>

                <div className="flex-[6] bg-white dark:bg-neutral-950 border border-neutral-200/60 dark:border-neutral-800 rounded-sm p-8 md:p-12 shadow-sm transition-colors duration-300">
                    <Formik
                        initialValues={{
                            firstname: "",
                            lastname: "",
                            email: "",
                            phone: "",
                            company: "",
                            project: "",
                            existingClient: "",
                        }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">First Name</label>
                                        <Field
                                            type="text"
                                            name="firstname"
                                            placeholder="Enter your first name"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        />
                                        <ErrorMessage
                                            name="firstname"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">Last Name</label>
                                        <Field
                                            type="text"
                                            name="lastname"
                                            placeholder="Enter your last name"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        />
                                        <ErrorMessage
                                            name="lastname"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">Business Email</label>
                                        <Field
                                            type="email"
                                            name="email"
                                            placeholder="Enter your business email"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        />
                                        <ErrorMessage
                                            name="email"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">Contact Number</label>
                                        <Field
                                            type="text"
                                            name="phone"
                                            placeholder="Enter your contact number"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        />
                                        <ErrorMessage
                                            name="phone"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">Organization</label>
                                        <Field
                                            type="text"
                                            name="company"
                                            placeholder="Enter your organization name"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        />
                                        <ErrorMessage
                                            name="company"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                    <div className="md:col-span-2">
                                        <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">Existing Client Status</label>
                                        <Field as="select"
                                            name="existingClient"
                                            className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors"
                                        >
                                            <option value="">Please select</option>
                                            <option value="yes" className="bg-neutral-900">Existing Client</option>
                                            <option value="no" className="bg-neutral-900">New Client</option>
                                        </Field>
                                        <ErrorMessage name="existingClient"
                                            component="div"
                                            className="text-red-600 dark:text-red-400 text-sm mt-1"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-thin text-neutral-700 dark:text-neutral-300 mb-2">
                                        Project Overview
                                    </label>
                                    <Field
                                        as="textarea"
                                        name="project"
                                        placeholder="Please describe your project objectives and requirements"
                                        rows="4"
                                        className="w-full p-3 bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm focus:outline-none focus:border-red-800 dark:focus:border-red-500 focus:ring-1 focus:ring-red-800 dark:focus:ring-red-500 transition-colors resize-none"
                                    />
                                    <ErrorMessage
                                        name="project"
                                        component="div"
                                        className="text-red-600 dark:text-red-400 text-sm mt-1"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-800 text-white py-4 rounded-sm hover:bg-red-700 transition duration-200 font-thin mt-4 shadow-sm"
                                >
                                    Submit Request
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    );
};

export default Contact;