# Consultation On the Go – images

- **Wallet coins:** The section "Pay with Wallet Coins" uses a realistic photo (gold coins). If it doesn’t load, the SVG `wallet-coins.svg` is shown.
- **Medicine delivery:** "Get delivery in the booth in ~10 minutes" uses a pharmacy/medicine photo, with `medicine-delivery.svg` as fallback.
- **AI prescription:** "Listen to your AI prescription summary" uses a doctor/digital consultation photo, with `ai-prescription.svg` as fallback.

To use **your own realistic photos** so they always load (no dependency on external URLs):

1. Add these files in this folder:
   - `wallet-coins.jpg` (or `.png`) – wallet, coins, or rewards
   - `medicine-delivery.jpg` – medicine delivery, pharmacy, or package
   - `ai-prescription.jpg` – AI, digital prescription, or doctor with tablet

2. In `src/components/ConsultationOnTheGo.jsx`, set the `image` URL for steps 3, 5, and 6 to:
   - `/images/ai-prescription.jpg`
   - `/images/wallet-coins.jpg`
   - `/images/medicine-delivery.jpg`

You can use free stock photos from [Unsplash](https://unsplash.com) or [Pexels](https://pexels.com) (check their license).
