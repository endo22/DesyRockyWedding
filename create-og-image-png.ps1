# PowerShell script untuk membuat OG image dalam format PNG
# PNG kadang lebih kompatibel dengan WhatsApp

Add-Type -AssemblyName System.Drawing

$inputPath = "d:\Project\wedding-invitation-1.1\public\img-original-backup\PRIM3264.jpg"
$outputPath = "d:\Project\wedding-invitation-1.1\public\img\og-image.png"

Write-Host "Creating PNG OG image..."

# Load original image
$originalImage = [System.Drawing.Image]::FromFile($inputPath)

# Target dimensions
$targetWidth = 1200
$targetHeight = 630

# Calculate crop
$sourceRatio = $originalImage.Width / $originalImage.Height
$targetRatio = $targetWidth / $targetHeight

if ($sourceRatio -gt $targetRatio) {
    $cropHeight = $originalImage.Height
    $cropWidth = [int]($cropHeight * $targetRatio)
    $cropX = [int](($originalImage.Width - $cropWidth) / 2)
    $cropY = 0
} else {
    $cropWidth = $originalImage.Width
    $cropHeight = [int]($cropWidth / $targetRatio)
    $cropX = 0
    $cropY = [int](($originalImage.Height - $cropHeight) / 2)
}

# Create image
$croppedRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
$croppedBitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
$graphics = [System.Drawing.Graphics]::FromImage($croppedBitmap)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($originalImage, 
    (New-Object System.Drawing.Rectangle(0, 0, $targetWidth, $targetHeight)),
    $croppedRect,
    [System.Drawing.GraphicsUnit]::Pixel)

# Save as PNG
$croppedBitmap.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)

# Cleanup
$graphics.Dispose()
$croppedBitmap.Dispose()
$originalImage.Dispose()

# Show results
$outputFile = Get-Item $outputPath
Write-Host "Created: $outputPath" -ForegroundColor Green
Write-Host "Dimensions: 1200x630"
$sizeKB = [math]::Round($outputFile.Length / 1KB, 2)
Write-Host "Size: $sizeKB KB"
