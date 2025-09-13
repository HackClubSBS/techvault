import { Button } from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Register() {
    return (
        <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl py-14">
            <CardHeader>
                <CardTitle className='text-3xl font-bold text-center'>Login to your account</CardTitle>
                <CardDescription className='text-center'>
                    Enter your details below to log in
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div className="flex flex-col gap-6">

                        {/* Email */}
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="m@example.com"
                                required
                            />
                        </div>
                        {/* Password */}
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" required />
                        </div>
                    </div>
                </form>
            </CardContent>
            <CardFooter className="flex-col gap-2">
                <Button type="submit" className="w-full">
                    Login
                </Button>
                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>
                <CardAction className="text-center w-full mt-2">
                    <Button className='' variant="link">Don't have an account? Sign up</Button>
                </CardAction>
            </CardFooter>

        </Card>
    )
}
