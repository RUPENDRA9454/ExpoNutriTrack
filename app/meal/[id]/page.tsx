import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft } from "lucide-react"

export default function MealInsightsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="relative">
        <Image
          src="/images/meal-photo.png"
          alt="Meal photo"
          width={400}
          height={300}
          className="w-full h-64 object-cover"
        />
        <Link href="/dashboard" className="absolute top-4 left-4 bg-white rounded-full p-2">
          <ChevronLeft className="h-5 w-5" />
        </Link>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-4">
          <h1 className="text-xl font-bold">Nutritional Breakdown</h1>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Calories</p>
              <p className="font-semibold">450 kcal</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Protein</p>
              <p className="font-semibold">20g</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Carbs</p>
              <p className="font-semibold">50g</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-500">Fat</p>
              <p className="font-semibold">25g</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Personalized Recommendations</h2>
          <p className="text-sm text-gray-600">
            Based on your health data and meal analysis, we recommend increasing your protein intake by 10g and reducing
            your carb intake by 15g for optimal health.
          </p>

          <Button className="w-full bg-green-500 hover:bg-green-600">View Detailed Analysis</Button>
        </div>
      </div>

      <div className="mt-auto border-t flex items-center justify-around p-3">
        <Link href="/dashboard" className="flex flex-col items-center text-gray-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H5.50002C5.22388 7.99999 5.00002 8.22385 5.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM6.00002 12V8.99999H9.00002V12H6.00002Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link href="/health" className="flex flex-col items-center text-gray-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.0749 12.975 13.8623 12.975 13.5999C12.975 11.72 12.4779 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs mt-1">Health</span>
        </Link>
        <Link href="/insights" className="flex flex-col items-center text-blue-500">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M7.5 0.875C3.83172 0.875 0.875 3.83172 0.875 7.5C0.875 11.1683 3.83172 14.125 7.5 14.125C11.1683 14.125 14.125 11.1683 14.125 7.5C14.125 3.83172 11.1683 0.875 7.5 0.875ZM1.825 7.5C1.825 4.35558 4.35558 1.825 7.5 1.825C10.6444 1.825 13.175 4.35558 13.175 7.5C13.175 10.6444 10.6444 13.175 7.5 13.175C4.35558 13.175 1.825 10.6444 1.825 7.5ZM7.5 3.5C7.22386 3.5 7 3.72386 7 4V7.5C7 7.77614 7.22386 8 7.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H8V4C8 3.72386 7.77614 3.5 7.5 3.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs mt-1">Insights</span>
        </Link>
        <Link href="/profile" className="flex flex-col items-center text-gray-400">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
          >
            <path
              d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.0749 12.975 13.8623 12.975 13.5999C12.975 11.72 12.4779 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-xs mt-1">Profile</span>
        </Link>
      </div>
    </div>
  )
}
