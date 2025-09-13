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
    <Card className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
      <CardHeader>
        <CardTitle className='text-3xl font-bold text-center'>Create an account</CardTitle>
        <CardDescription className='text-center text-md'>
          Enter your details below to create a new account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            {/* Full name */}
            <div className="grid gap-2">
              <Label htmlFor="name" className="text-md">Full name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                required
              />
            </div>
            {/* Email */}
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-md">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            {/* Password */}
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-md">Password</Label>
              <Input id="password" type="password" required />
            </div>
            {/* Confirm Password (optional) */}
            <div className="grid gap-2">
              <Label htmlFor="confirm-password" className="text-md">Confirm password</Label>
              <Input id="confirm-password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full text-md">
          Register
        </Button>
        <Button variant="outline" className="w-full text-md">
          Sign up with Google
        </Button>
         <CardAction className="text-center w-full mt-2">
          <Button className='text-md' variant="link">Already have an account? Log in</Button>
        </CardAction>
      </CardFooter>
      
    </Card>
  )
}
