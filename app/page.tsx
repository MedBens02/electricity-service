import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

export default async function ElectricityPage() {
  const user = await currentUser()

  if (!user) {
    redirect('/sign-in')
  }

  // Extract user data including custom metadata
  const userData = {
    name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User',
    email: user.primaryEmailAddress?.emailAddress || 'No email',
    nationalId: (user.unsafeMetadata?.nationalId as string) || 'Not provided',
    phone: (user.unsafeMetadata?.phone as string) || 'Not provided',
    address: (user.unsafeMetadata?.address as string) || 'Not provided',
    city: (user.unsafeMetadata?.city as string) || 'Not provided',
    dateOfBirth: (user.unsafeMetadata?.dateOfBirth as string) || 'Not provided',
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Electricity Service</h1>
          <p className="text-gray-600">Smart City Portal</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome to Electricity Service
          </h2>
          <p className="text-lg text-gray-600">
            Manage your electricity bills, consumption, and service requests
          </p>
        </div>

        {/* User Information Card */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Your Information</h3>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Full Name</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.name}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.email}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">National ID</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.nationalId}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Phone</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.phone}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Address</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.address}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">City</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.city}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">Date of Birth</dt>
              <dd className="text-base font-semibold text-gray-900">{userData.dateOfBirth}</dd>
            </div>

            <div className="space-y-2">
              <dt className="text-sm font-medium text-gray-500">User ID</dt>
              <dd className="text-base font-mono text-sm text-gray-600">{user.id}</dd>
            </div>
          </div>

          {/* SSO Success Indicator */}
          <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-800 font-medium">
              ✓ Successfully authenticated via Single Sign-On (SSO)
            </p>
            <p className="text-green-600 text-sm mt-1">
              You were automatically logged in from the Smart City Portal
            </p>
          </div>
        </div>

        {/* Service Features (Placeholder) */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">View Bills</h4>
            <p className="text-gray-600 text-sm">Access your electricity bills and payment history</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Consumption Tracking</h4>
            <p className="text-gray-600 text-sm">Monitor your electricity usage and trends</p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Service Requests</h4>
            <p className="text-gray-600 text-sm">Report issues and track service requests</p>
          </div>
        </div>
      </main>
    </div>
  )
}
