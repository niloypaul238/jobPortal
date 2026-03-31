'use client'
import { LoaderCircle, Lock, Mail, UserRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, FormEvent, useState } from 'react'

function Signup() {
  const [user, setUser] = useState({ name: '', email: '', password: '' })
  const [errors, setErrors] = useState({ name: '', email: '', password: '' })
  const [loading, setLoading] = useState(false)

  const onchangeFun = (e) => {
        const targ = e.target.name;
        const val = e.target.value;
        const copy = {...user}
        copy[targ] = val;
        setUser(copy)
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-md rounded-lg bg-white p-6">
        {/* Logo */}
        <div className="mb-4 flex justify-center">
          <Image alt='' src={"/original-8939a7332eb5bdc39b71ea43d0b14965.webp"} width={100} height={100} />
        </div>

        <h2 className="mb-8 text-center text-2xl font-semibold text-gray-800">
          Sign up to Resume BD
        </h2>

        <form>
          {/* Full Name */}
          <div className="mb-6">
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <UserRound size={20} />
              </span>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={user.name}
                onChange={(e) => onchangeFun(e)}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${errors.name ? 'border-red-500 ring-red-200' : 'border-gray-300'
                  }`}
              />
            </div>
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Mail size={20} />
              </span>
              <input
                id="email"
                type="email"
                name="email"
                onChange={(e) => onchangeFun(e)}
                placeholder="Enter your email"
                value={user.email}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${errors.email ? 'border-red-500 ring-red-200' : 'border-gray-300'
                  }`}
              />
            </div>
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative flex items-center">
              <span className="absolute left-3 text-gray-500">
                <Lock size={20} />
              </span>
              <input
                id="password"
                type="password"
                name="password"
                onChange={(e) => onchangeFun(e)}
                placeholder="Enter your password"
                value={user.password}
                className={`w-full rounded-lg border px-4 py-2.5 pl-10 focus:ring-2 focus:ring-blue-200 ${errors.password ? 'border-red-500 ring-red-200' : 'border-gray-300'
                  }`}
              />
            </div>
            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="flex h-10 w-full items-center justify-center rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 disabled:bg-gray-300"
          >
            {loading ? <LoaderCircle className="animate-spin" size={20} /> : 'Create an account'}
          </button>
        </form>

        {/* Login Link */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account? </span>
          <Link href="/login" className="text-sm font-medium text-blue-600 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup