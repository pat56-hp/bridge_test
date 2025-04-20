import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import AuthLayout from "@/layouts/auth-layout";
import { Link, useForm } from "@inertiajs/react";
import { Mail, EyeClosed, Eye, IdCard, CreditCard } from "lucide-react";
import InputError from "@/components/InputError";
import { useState } from "react";

export default function Login() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleEye = () => setIsOpen(!isOpen);

    const { data, setData, post, processing, errors, reset } = useForm({
        card_number: "",
        pin: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("pin"),
            onError:() => {
                reset('pin')
            }
        });
    };

    return (
        <AuthLayout>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form
                onSubmit={submit}
                className="p-6 md:p-8 h-full flex items-center"
            >
                <div className="flex flex-col gap-6 flex-1">
                    <div className="flex flex-col mb-4">
                        <h1 className="text-xl font-bold">Connexion</h1>
                        <p className="text-balance text-sm text-muted-foreground">
                            Veuillez remplir tous les champs svp
                        </p>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="card_number">
                            Numéro de carte <span className="text-red-400">*</span>
                        </Label>
                        <div>
                            <div className="relative">
                                <Input
                                    id="card_number"
                                    type="number"
                                    placeholder="4242424242424242"
                                    className="h-12 pr-10 border-gray-300 dark:border-gray-600 focus:ring-red-500 focus:border-red-500 rounded-lg"
                                    required
                                    value={data.card_number}
                                    name="email"
                                    onChange={(e) =>
                                        setData("card_number", e.target.value)
                                    }
                                />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <CreditCard className="h-5 w-5 text-gray-400" />
                                </div>
                            </div>
                            <InputError message={errors.card_number} className="" />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="pin">
                                Code pin{" "}
                                <span className="text-red-400">*</span>
                            </Label>
                            
                        </div>
                        <div>
                            <div className="relative">
                                <Input
                                    id="pin"
                                    className="h-12 pr-10 border-gray-300 dark:border-gray-600 focus:ring-red-500 focus:border-red-500 rounded-lg"
                                    type={isOpen ? "text" : "password"}
                                    required
                                    value={data.pin}
                                    name="pin"
                                    onChange={(e) =>
                                        setData("pin", e.target.value)
                                    }
                                />
                                <div
                                    className="absolute inset-y-0 right-0 flex items-center pr-3 hover:cursor-pointer"
                                    onClick={toggleEye}
                                >
                                    {isOpen ? (
                                        <EyeClosed className="h-5 w-5 text-gray-400 z-50" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400 z-50" />
                                    )}
                                </div>
                            </div>
                            <InputError message={errors.pin} />
                        </div>
                    </div>
                    
                    <Button
                        type="submit"
                        className="w-full h-12 hover:cursor-pointer"
                        disabled={processing}
                    >
                        Se connecter
                    </Button>
                </div>
            </form>
        </AuthLayout>
    );
}
