# Visitor Counter Implementation

## How It Works

The visitor counter uses **CountAPI.xyz**, a free counter service, to track visitors globally across all devices.

### What Gets Tracked:
- **Total Visitors**: Global counter tracked across all devices (via CountAPI)
- **Today/Month/Year**: Local counters per browser/device (via localStorage)

### Counter Logic:
1. Each visitor gets a unique token stored in their browser
2. The global counter increments once per visitor per day
3. Daily/monthly/yearly stats are tracked locally per browser
4. If CountAPI is unavailable, it falls back to localStorage

## Limitations

### Current Implementation:
- **Total counter** is accurate and works across all devices ✅
- **Daily/Monthly/Yearly** counters are per-browser only ⚠️
- Requires internet connection to sync with CountAPI
- CountAPI is a free service with no SLA guarantee

### Why Not All Global?
To track daily/monthly/yearly stats globally, you would need:
1. A backend database (Firebase, Supabase, PostgreSQL, etc.)
2. Multiple API keys/counters in CountAPI (limited to 3 per namespace)
3. A custom backend solution

## Alternative Solutions

### Option 1: Firebase Realtime Database (Recommended)
**Pros:**
- Free tier available
- Real-time updates
- Full control over data structure
- Reliable and scalable

**Cons:**
- Requires Firebase account setup
- Need to add Firebase SDK (~10KB)
- Initial setup complexity

### Option 2: Supabase
**Pros:**
- Open-source alternative to Firebase
- Free tier available
- PostgreSQL-based

**Cons:**
- Requires account setup
- More complex setup

### Option 3: Simple Backend API
Create a simple Cloudflare Worker or Vercel Serverless Function:
```typescript
// Example Cloudflare Worker
let visitors = 0;

export default {
  async fetch(request) {
    visitors++;
    return new Response(JSON.stringify({ count: visitors }));
  }
};
```

## Environment Variables

No environment variables required for CountAPI.

## Testing

To test the counter:
1. Clear your browser's localStorage
2. Visit the site
3. Check that the counter increments
4. Visit from another device/browser - counter should continue incrementing

## Migration to Another Service

If you want to migrate to Firebase or another backend:

1. Replace the `fetchVisitorCount()` function with your API call
2. Update the counter storage logic
3. Keep the localStorage fallback for offline support

## Files Modified

- `src/components/VisitorCounter.tsx` - Main counter implementation

## Support

For issues with CountAPI, visit: https://countapi.xyz/
For alternative setups, see the options above.
