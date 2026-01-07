# Setup Google Sheets untuk Wedding Wishes & RSVP

Ucapan dan konfirmasi kehadiran dari tamu akan tersimpan di Google Sheets secara gratis dan permanen.

## Langkah Setup:

### 1. Buat Google Spreadsheet Baru
1. Buka [Google Sheets](https://sheets.google.com)
2. Buat spreadsheet baru
3. Rename spreadsheet menjadi "Wedding Data" atau nama lain
4. Buat 2 sheets:
   - **Sheet 1**: Rename menjadi "Wishes" untuk ucapan
   - **Sheet 2**: Rename menjadi "RSVP" untuk konfirmasi kehadiran

#### Header untuk Sheet "Wishes":
Di baris pertama, buat header:
- A1: `ID`
- B1: `Name`
- C1: `Attendance`
- D1: `Message`
- E1: `Timestamp`

#### Header untuk Sheet "RSVP":
Di baris pertama, buat header:
- A1: `ID`
- B1: `Name`
- C1: `Attendance`
- D1: `Event`
- E1: `Guests`
- F1: `Message`
- G1: `Timestamp`

### 2. Setup Google Apps Script untuk Wishes
1. Di Google Sheets, klik **Extensions** > **Apps Script**
2. Hapus kode default
3. Copy-paste semua kode dari file `google-apps-script.js`
4. Klik **Save** dan rename project jadi "Wedding Wishes API"
5. Klik **Deploy** > **New deployment**
6. Pilih **Web app**, setting:
   - **Execute as**: Me
   - **Who has access**: **Anyone**
7. Klik **Deploy** dan **copy URL**
8. Simpan URL ini untuk `VITE_GOOGLE_SCRIPT_URL`

### 3. Setup Google Apps Script untuk RSVP
1. Masih di Apps Script yang sama, klik **File** > **New** > **Script file**
2. Beri nama "RSVP"
3. Copy-paste semua kode dari file `google-apps-script-rsvp.js`
4. Klik **Save**
5. Klik **Deploy** > **New deployment** (deployment baru terpisah)
6. Pilih **Web app**, setting:
   - **Execute as**: Me
   - **Who has access**: **Anyone**
7. Klik **Deploy** dan **copy URL** yang berbeda
8. Simpan URL ini untuk `VITE_GOOGLE_SCRIPT_RSVP_URL`

### 4. Tambahkan URL ke Project
1. Buat file `.env` di root project (copy dari `.env.example`)
2. Isi dengan kedua URL:
   ```
   VITE_GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/WISHES_ID/exec
   VITE_GOOGLE_SCRIPT_RSVP_URL=https://script.google.com/macros/s/RSVP_ID/exec
   ```
3. Save file `.env`

### 5. Test Aplikasi
1. Restart development server: `npm run dev`
2. Test kirim ucapan di "Wedding Wishes"
3. Test kirim RSVP di "Konfirmasi Kehadiran"
4. Cek Google Sheets - data harus muncul di kedua sheet

## Catatan Penting:
- ✅ **Gratis selamanya** - tidak ada biaya
- ✅ **Unlimited submissions** - tidak ada batasan jumlah ucapan
- ✅ **Data tersimpan permanen** di Google Sheets
- ✅ **Bisa di-moderate** - hapus/edit ucapan spam langsung di Sheets
- ✅ **Bisa di-export** ke Excel kapan saja
- ⚠️ **Jangan share link Spreadsheet** - cukup deploy Apps Script saja
- ⚠️ **File .env jangan di-commit** ke GitHub (sudah ada di .gitignore)

## Troubleshooting:
- Jika ucapan tidak tersimpan: pastikan **Who has access** = **Anyone**
- Jika error 403: Re-deploy Apps Script dengan setting yang benar
- Jika ucapan tidak muncul: cek console browser untuk error
