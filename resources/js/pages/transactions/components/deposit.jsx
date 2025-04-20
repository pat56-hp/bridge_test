import { useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'
import ActionDialog from "../../../components/shared/action-dialog"
import { Button } from '../../../components/ui/button'
import { Label } from '../../../components/ui/label'
import { TrendingUp } from 'lucide-react'
import { Input } from '../../../components/ui/input'
import InputError from '../../../components/InputError'
import Required from '../../../components/required'

export default function Deposit() {
    const {post, errors, reset, setData, processing} = useForm({
        amout: ''
    })

    useEffect(() => {
        setData('amout', '')
        errors.amout = ''
    }, [])

  return (
    <ActionDialog
        title={"Effectuer un dépot"}
        description={""}
        processing={processing}
        onConfirm={async () => {
            return new Promise((resolve, reject) => {
                post(route("deposit"), {
                    preserveScroll: true,
                    onSuccess: () => {
                        resolve(true);
                        reset();
                    },
                    onError: (error) => {
                        console.log(error)
                        reject(new Error("Echec de la requete"));
                    },
                });
            });
        }}
        trigger={
            <Button className="hover:cursor-pointer hover:text-white hover:bg-green-700 text-white bg-green-500">
                    <TrendingUp className="w-4 h-4" /> Effectuer un dépot
                </Button>
        }
        content={
            <div className="space-y-4 max-h-[70vh] overflow-y-auto">
                    <div className="w-full">
                        <Label htmlFor="amount">
                            Montant <Required />
                        </Label>
                        <Input
                            id="amount"
                            className="mt-2"
                            onChange={(e) => setData("amount", e.target.value)}
                            placeholder="Montant"
                            type="number"
                            min="1"
                            required
                        />
                        <InputError message={errors.amount} />
                    </div>
                    
                </div>
        }
    />
  )
}
