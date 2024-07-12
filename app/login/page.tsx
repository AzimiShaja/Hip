import Footer from "@/components/Footer";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

const Login = () => {
    return (
        <div className="page-style login">
            <div className="xl:w-[1400px] w-full flex flex-col items-center justify-center py-20">
                <form className="bg-gray-grid-1 rounded-3xl p-10 text-white flex flex-col items-center gap-2 xl:w-[900px] w-full">
                    <div className="flex flex-col gap-1 items-center my-10">
                        <h1 className="font-extrabold text-3xl md:text-5xl">Account Login</h1>
                        <h1 className="font-bold text-gray-400">Login into your account</h1>
                    </div>
                    <Input type="email" required className="rounded-xl py-6" placeholder="Email / Username" />
                    <Input type="password" required className="rounded-xl py-6" placeholder="Password" />
                    <div className="flex items-center space-x-2 my-4 w-full">
                        <Checkbox id="terms" className="rounded-[4px] bg-white" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Remember me
                        </label>
                    </div>
                    <button className="bg-orange-button w-full text-black rounded-xl p-3 px-10 text-md hover:opacity-90 transition-all">
                        Login
                    </button>
                    <p className="text-center">
                        Don&apos;t have an account?{" "}
                        <Link className="text-orange-button" href="/signup">
                            Register
                        </Link>{" "}
                    </p>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
