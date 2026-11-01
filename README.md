# Brunch Desk — Standalone POS Workflow Demo

Independent HTML/CSS/JavaScript project by Mia Bui. No portfolio biography, photographs or external services.

## Run
Open index.html in a current browser. No build or dependencies required.

## GitHub Pages
Create public repo `guided-brunch-ordering` (or `brunch-desk-pos`). Upload ZIP CONTENTS to repository root, including assets/. Enable Settings → Pages → main → / (root). Wait for deployment. No nested ZIP or extra enclosing folder.

## Files
- index.html: application shell, editor, order panel, review dialog and kitchen screen.
- assets/styles.css: desktop/tablet/mobile layout and cream/forest palette.
- assets/order-model.js: fictional menu, prices in CAD cents, validation and routing.
- assets/order-state.js: cart, seats, review revision, immutable ticket snapshots and send protection.
- assets/app.js: menu cards, modifier buttons, editor, cart, review and Kitchen controls.

## Features
Three brunch meals; item-specific required modifiers; optional $3 coffee / $4 mini pancake meal offers; multiple meals with seats 1–6; edit/remove unsent meals; dine-in table or takeout; guest-confirmation dialog; savory/sweet/beverage routing; session kitchen queue with Ready/Undo ready; new orders retain previous tickets in memory.

## 60-second recording
1. Choose Steak & eggs, click Add before selecting: show validation.
2. Select Poached → Medium → Fruit. Add coffee and mini pancake. Add to order: $31.
3. Select Classic breakfast, Seat 2 → Scrambled → Bacon → Crispy → Fries. Add: $16. Order total $47.
4. Edit Seat 1 side, save changes; review the current order.
5. Confirm with checkbox, generate tickets: three Kitchen lanes.
6. Mark one ticket Ready, return to Order, start New order.

## Expected manual checks — record actual results before claiming Pass
- Steak + coffee $27; steak + both $31; salmon alone $22; classic + both $23.
- Egg style/side required; steak also requires doneness; classic requires protein.
- Salmon requires Medium rare, Medium well or Well done; it never carries steak doneness into notes.
- Classic Bacon requires Crispy or Soft; Sausage requires Butterfly or Grilled. Switching protein clears its preparation selection. Tofu has no preparation subgroup.
- Edit retains seat/add-ons; save updates total; cancel preserves saved item.
- Removing a meal also removes its combo add-ons.
- Multiple guests remain correctly identified on station tickets.
- Review confirmation starts unchecked; no duplicate sends; sent order cannot be edited.
- New order keeps earlier kitchen tickets; page reload resets all data.
- Check keyboard navigation, focus, dialog close and touch layout at 390px/768px/1280px.

## Verification performed
Node tests passed for model and order-state transitions: validation, multi-seat totals, edits invalidating review, confirmation gating, routing, repeat-send protection, sent-order locking, new-order ticket snapshots and takeout. JS syntax, queried IDs and local resources checked. Visual browser QA has not been completed.

## Scope
Fictional CAD prices before tax/tips. No checkout/payment, real printers, POS integration, cloud sync, stock enforcement, AI recommendations, or actual promotion engine. Each meal can have one of each add-on; stated combo prices apply to any main meal in this sample. All state is browser-memory only. Sent-ticket editing/amendment is outside this version. A real system needs offline handling, authentication, allergy workflows, audit logs, fiscal and hardware integration. No measured accuracy or sales improvements are claimed.
