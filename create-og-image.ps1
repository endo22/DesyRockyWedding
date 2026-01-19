# PowerShell script untuk resize gambar untuk OG image
# Optimal size: 1200x630, max 300KB

Add-Type -AssemblyName System.Drawing

$inputPath = "d:\Project\wedding-invitation-1.1\public\img-original-backup\PRIM3264.jpg"
$outputPath = "d:\Project\wedding-invitation-1.1\public\img\og-image.jpg"

Write-Host "Creating optimized OG image..."

# Load original image
$originalImage = [System.Drawing.Image]::FromFile($inputPath)

# Target dimensions for OG image
$targetWidth = 1200
$targetHeight = 630

# Calculate crop dimensions to maintain aspect ratio
$sourceRatio = $originalImage.Width / $originalImage.Height
$targetRatio = $targetWidth / $targetHeight

if ($sourceRatio -gt $targetRatio) {
    # Image is wider - crop width
    $cropHeight = $originalImage.Height
    $cropWidth = [int]($cropHeight * $targetRatio)
    $cropX = [int](($originalImage.Width - $cropWidth) / 2)
    $cropY = 0
} else {
    # Image is taller - crop height
    $cropWidth = $originalImage.Width
    $cropHeight = [int]($cropWidth / $targetRatio)
    $cropX = 0
    $cropY = [int](($originalImage.Height - $cropHeight) / 2)
}

# Create cropped image
$croppedRect = New-Object System.Drawing.Rectangle($cropX, $cropY, $cropWidth, $cropHeight)
$croppedBitmap = New-Object System.Drawing.Bitmap($targetWidth, $targetHeight)
$graphics = [System.Drawing.Graphics]::FromImage($croppedBitmap)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.DrawImage($originalImage, 
    (New-Object System.Drawing.Rectangle(0, 0, $targetWidth, $targetHeight)),
    $croppedRect,
    [System.Drawing.GraphicsUnit]::Pixel)

# Save with JPEG quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
    [System.Drawing.Imaging.Encoder]::Quality, 85L)

$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | 
    Where-Object { $_.MimeType -eq 'image/jpeg' } | Select-Object -First 1

$croppedBitmap.Save($outputPath, $jpegCodec, $encoderParams)

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
