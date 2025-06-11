"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GradientText } from "@/components/ui/gradient-text"
import {
  Camera,
  Home,
  Search,
  TrendingUp,
  User,
  Zap,
  ImageIcon,
  FlipHorizontal,
  Flashlight,
  Grid3x3,
  Sparkles,
} from "lucide-react"

export default function ScanPage() {
  const [cameraActive, setCameraActive] = useState(true)
  const [flashOn, setFlashOn] = useState(false)
  const [gridOn, setGridOn] = useState(true)
  const [isCapturing, setIsCapturing] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  // Simulate camera capture
  const handleCapture = () => {
    setIsCapturing(true)
    // Simulate processing delay
    setTimeout(() => {
      window.location.href = "/meal/analysis-result"
    }, 1500)
  }

  // Toggle flash
  const toggleFlash = () => {
    setFlashOn(!flashOn)
  }

  // Toggle grid overlay
  const toggleGrid = () => {
    setGridOn(!gridOn)
  }

  // Switch camera (front/back)
  const switchCamera = () => {
    // In a real app, this would switch between front and back cameras
    alert("Camera switched")
  }

  // Upload from gallery
  const uploadFromGallery = () => {
    window.location.href = "/add-meal"
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Camera View */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Video feed */}
        {cameraActive && (
          <>
            <video ref={videoRef} autoPlay playsInline muted className="absolute inset-0 h-full w-full object-cover" />
            <div
              className={`absolute inset-0 ${flashOn ? "bg-white opacity-10" : ""} transition-opacity duration-200`}
            ></div>
          </>
        )}

        {/* Grid overlay */}
        {gridOn && cameraActive && (
          <div className="absolute inset-0 pointer-events-none">
            <div className="h-full w-full grid grid-cols-3 grid-rows-3">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="border border-white/20"></div>
              ))}
            </div>
          </div>
        )}

        {/* Food detection overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full border-2 border-dashed border-green-400/70 flex items-center justify-center">
            <div className="text-center bg-black/40 backdrop-blur-sm rounded-lg px-4 py-2">
              <p className="text-sm font-medium text-green-400">Position food in center</p>
            </div>
          </div>
        </div>

        {/* Camera controls - Top */}
        <div className="absolute top-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Button variant="ghost" size="icon" className="rounded-full bg-black/30 backdrop-blur-md">
                <Home className="h-5 w-5" />
              </Button>
            </Link>
            <div className="glass-effect px-4 py-2 rounded-full">
              <GradientText>Food Scanner</GradientText>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/30 backdrop-blur-md"
              onClick={toggleFlash}
            >
              <Flashlight className={`h-5 w-5 ${flashOn ? "text-yellow-400" : "text-white"}`} />
            </Button>
          </div>
        </div>

        {/* Camera controls - Bottom */}
        <div className="absolute bottom-24 left-0 right-0 p-4">
          <div className="flex items-center justify-around">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/30 backdrop-blur-md h-12 w-12"
              onClick={toggleGrid}
            >
              <Grid3x3 className={`h-5 w-5 ${gridOn ? "text-green-400" : "text-white"}`} />
            </Button>

            {/* Capture button */}
            <Button
              disabled={isCapturing}
              onClick={handleCapture}
              className="rounded-full h-20 w-20 bg-white flex items-center justify-center p-0 hover:bg-white/90"
            >
              <div className="rounded-full h-16 w-16 border-2 border-black flex items-center justify-center">
                {isCapturing ? (
                  <div className="h-10 w-10 rounded-full bg-green-500 animate-pulse flex items-center justify-center">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                ) : (
                  <Camera className="h-8 w-8 text-black" />
                )}
              </div>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-black/30 backdrop-blur-md h-12 w-12"
              onClick={switchCamera}
            >
              <FlipHorizontal className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Alternative options */}
        <div className="absolute bottom-0 left-0 right-0 glass-effect border-t border-white/10">
          <div className="flex items-center justify-around p-4 max-w-md mx-auto">
            <Button variant="ghost" className="flex flex-col items-center" onClick={uploadFromGallery}>
              <ImageIcon className="h-6 w-6 mb-1" />
              <span className="text-xs">Gallery</span>
            </Button>
            <Button
              variant="ghost"
              className="flex flex-col items-center"
              onClick={() => (window.location.href = "/add-meal")}
            >
              <Zap className="h-6 w-6 mb-1" />
              <span className="text-xs">Quick Add</span>
            </Button>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 glass-effect border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-around p-3 max-w-md mx-auto">
            <Link href="/dashboard" className="flex flex-col items-center text-gray-400 hover:text-gray-300">
              <Home className="h-5 w-5" />
              <span className="text-xs mt-1">Home</span>
            </Link>
            <Link href="/medical-reports" className="flex flex-col items-center text-gray-400 hover:text-gray-300">
              <Search className="h-5 w-5" />
              <span className="text-xs mt-1">Reports</span>
            </Link>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center shadow-lg">
                <Camera className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs mt-1 text-green-500 font-medium">Scan</span>
            </div>
            <Link href="/insights" className="flex flex-col items-center text-gray-400 hover:text-gray-300">
              <TrendingUp className="h-5 w-5" />
              <span className="text-xs mt-1">Insights</span>
            </Link>
            <Link href="/profile" className="flex flex-col items-center text-gray-400 hover:text-gray-300">
              <User className="h-5 w-5" />
              <span className="text-xs mt-1">Profile</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
