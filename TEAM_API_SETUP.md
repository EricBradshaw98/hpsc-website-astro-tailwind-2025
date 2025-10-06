# Team Page API Setup Guide

The Our Team page (`src/pages/about/our-team.astro`) supports multiple ways to display team photos:

## Current Setup: Placeholder Avatar API

Currently using **DiceBear Avataaars** - cartoon-style avatars that are consistent based on person's name.

### Available Placeholder APIs

To switch placeholder APIs, edit the `getPlaceholderAvatar()` function in `our-team.astro`:

#### Option 1: DiceBear Avataaars (Current) ✅
```typescript
const seed = name.toLowerCase().replace(/\s+/g, '-');
return `https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}&size=400`;
```
- **Pros**: Consistent avatars, fun cartoon style, SVG format
- **Cons**: Not realistic
- **Example**: https://api.dicebear.com/7.x/avataaars/svg?seed=tanya-ratzlaff&size=400

#### Option 2: Pravatar (Real Photos)
```typescript
const photoId = (index % 70) + 1;
return `https://i.pravatar.cc/400?img=${photoId}`;
```
- **Pros**: Real professional-looking photos, 70 different faces
- **Cons**: Limited selection, not consistent per name
- **Example**: https://i.pravatar.cc/400?img=1

#### Option 3: Lorem Picsum (Random Images)
```typescript
return `https://picsum.photos/seed/${encodeURIComponent(name)}/400/400`;
```
- **Pros**: Consistent per name, variety
- **Cons**: Not people photos, random objects/landscapes
- **Example**: https://picsum.photos/seed/tanya-ratzlaff/400/400

#### Option 4: UI Avatars (Initials)
```typescript
const color = index % 3 === 0 ? '00b6f0' : index % 3 === 1 ? '0095c7' : '33c4f3';
return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=${color}&color=fff&bold=true`;
```
- **Pros**: Clean, professional, shows initials
- **Cons**: Less personal
- **Example**: https://ui-avatars.com/api/?name=Tanya+Ratzlaff&size=400&background=00b6f0&color=fff&bold=true

---

## Connecting to a Real API

### Option A: WordPress REST API

1. Add to `.env`:
```env
PUBLIC_TEAM_API_URL=https://your-wordpress-site.com
TEAM_API_KEY=your_bearer_token_here  # Optional
```

2. In WordPress, create Custom Post Type `team_members` with fields:
```php
// Required fields (via ACF or meta):
- title: Person's name
- acf.position: Job title
- acf.bio: Biography text
- acf.photo: Image URL
- acf.linkedin: LinkedIn profile URL
- acf.category: "staff" | "board" | "advisor"
- acf.order: Number for sorting (0-999)
```

3. API will automatically fetch from:
   `https://your-wordpress-site.com/wp-json/wp/v2/team_members?per_page=100`

### Option B: Custom JSON API

1. Add to `.env`:
```env
PUBLIC_TEAM_API_URL=https://api.yourdomain.com/team
TEAM_API_KEY=your_api_key_here  # Optional
```

2. API should return JSON in this format:
```json
{
  "staff": [
    {
      "name": "Tanya Ratzlaff",
      "title": "Executive Director",
      "bio": "Guides strategic planning...",
      "image": "https://cdn.yourdomain.com/photos/tanya.jpg",
      "linkedin": "https://linkedin.com/in/tanya-ratzlaff",
      "order": 1
    }
  ],
  "board": [...],
  "advisors": [...]
}
```

### Option C: Cloudinary / CDN

If you have photos hosted on Cloudinary or another CDN:

```typescript
// In our-team.astro, modify fallbackData:
image: 'https://res.cloudinary.com/your-cloud/image/upload/v1/team/tanya-ratzlaff.jpg'
```

---

## Testing Different APIs

### Test with Real API:
1. Set `PUBLIC_TEAM_API_URL` in `.env`
2. Run `npm run dev`
3. Visit http://localhost:4321/about/our-team
4. Check browser console for any API errors

### Test Fallback Mode:
1. Remove or comment out `PUBLIC_TEAM_API_URL` in `.env`
2. Run `npm run dev`
3. Should see placeholder avatars

---

## Error Handling

The page has built-in fallback handling:

1. **API Available + Success**: Shows data from API
2. **API Available + Fails**: Falls back to static data + logs error (dev only)
3. **No API Configured**: Uses static data with placeholder avatars

---

## Switching Placeholder APIs

To try different placeholder APIs without editing code:

### Quick Test: Pravatar (Real Photos)
```typescript
// Line 36-37 in our-team.astro
const photoId = (index % 70) + 1;
return `https://i.pravatar.cc/400?img=${photoId}`;
```

### Quick Test: UI Avatars (Initials)
```typescript
// Line 39-41 in our-team.astro
const color = index % 3 === 0 ? '00b6f0' : index % 3 === 1 ? '0095c7' : '33c4f3';
return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=400&background=${color}&color=fff&bold=true`;
```

After changing, rebuild:
```bash
npm run build
```

---

## Recommended Setup for Production

1. **Phase 1 (Current)**: Use DiceBear or Pravatar placeholders
2. **Phase 2**: Upload real photos to Cloudinary/CDN
3. **Phase 3**: Connect to WordPress or CMS API
4. **Phase 4**: Build admin interface for team management

---

## API Response Examples

### WordPress ACF Response:
```json
[
  {
    "id": 123,
    "title": { "rendered": "Tanya Ratzlaff" },
    "acf": {
      "position": "Executive Director",
      "bio": "Guides strategic planning...",
      "photo": "https://wp-site.com/wp-content/uploads/tanya.jpg",
      "linkedin": "https://linkedin.com/in/tanya-ratzlaff",
      "category": "staff",
      "order": 1
    }
  }
]
```

### Custom API Response:
```json
{
  "staff": [
    {
      "name": "Tanya Ratzlaff",
      "title": "Executive Director",
      "bio": "Guides strategic planning...",
      "image": "https://cdn.domain.com/team/tanya.jpg",
      "linkedin": "https://linkedin.com/in/tanya-ratzlaff",
      "order": 1
    }
  ],
  "board": [],
  "advisors": []
}
```

---

## Troubleshooting

### Images not loading?
- Check browser console for CORS errors
- Verify image URLs are accessible
- Try placeholder API directly in browser

### API not connecting?
- Verify `PUBLIC_TEAM_API_URL` in `.env`
- Check API endpoint returns 200 OK
- Review API key permissions
- Check browser Network tab

### Fallback data showing?
- Check `.env` file exists and has correct variable name (`PUBLIC_` prefix required)
- Restart dev server after changing `.env`
- Verify API endpoint is reachable

---

## Future Enhancements

- [ ] Add loading skeletons while fetching API
- [ ] Add retry logic for failed API requests
- [ ] Cache API responses (Astro does this by default at build time)
- [ ] Add image optimization with Astro Image component
- [ ] Add admin interface for managing team members
- [ ] Add filtering/search functionality
