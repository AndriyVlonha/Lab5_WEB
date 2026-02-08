# Laboratory Report No. 2

**Student:** Andriy Vlonha  
**Group:** 42-CS  
**Date:** 20/01/2026

---

## Objective

To learn how to create React components, pass parameters through props, work with components as separate modules, and document the development process.

---

## Procedure

---

### 1. Creating a React Project

```bash
pnpm create vite@latest traffic-lights -- --template react
cd traffic-lights
pnpm install
pnpm install prop-types
```

**Project Structure:**

**Screenshots:**  
<table width="100%" style="border: none;">
  <tr>
    <td align="center" width="50%">
      <img src="Images/project_init.png" alt="Project Init" width="100%"/>
      <br/>
      <sub><b>Fig. 1:</b> Creating project structure</sub>
    </td>
    <td align="center" width="50%">
      <img src="Images/install.png" alt="Install Dependencies" width="100%"/>
      <br/>
      <sub><b>Fig. 2:</b> Installing dependencies</sub>
    </td>
  </tr>
</table>

---

### 2. Light Component

**Code: `src/components/Light.jsx`**

**Description:**
- Accepts `tlColor` and `isActive` through props
- Uses realistic dimmed colors for inactive lights
- Adds glow effect for active lights

---

### 3. TrafficLights Component

**Code: `src/components/TrafficLights.jsx`**

**Description:**
- Uses `useState` hook to manage active light
- Uses `useEffect` hook for automatic switching every 5 seconds
- Supports vertical and horizontal orientation

---

### 4. Demonstration in App

**Code: `src/App.jsx`**

**Application Screenshots:**  
<div align="center">

  <img src="Images/vertical.png" width="400" />
  <p><b>Figure 3.</b> Vertical traffic light (initial state)</p>
  <br/>

  <img src="Images/horizontal.png" width="500" />
  <p><b>Figure 4.</b> Horizontal traffic light with active green signal</p>
  <br/>

  <img src="Images/both.png" width="600" />
  <p><b>Figure 5.</b> Simultaneous operation of both components on the main page</p>

</div>
---

### 5. Running the Project

```bash
cd traffic-lights
pnpm run dev
```

**Screenshot:**  
<div align="center">
  <figure>
    <img src="Images/run_dev.png" width="80%" alt="Running App"/>
    <br/>
    <sub><b>Fig. 6:</b> Result of executing <code>npm run dev</code> command</sub>
  </figure>
</div>

---

## Results

### Implemented Features:

1. **Light Component:**
   - Accepts color through props (`tlColor`)
   - Accepts active state (`isActive`)
   - Uses realistic dimmed colors
   - Has glow effect for active lights
   - Uses PropTypes for validation

2. **TrafficLights Component:**
   - Uses three Light components
   - Supports vertical and horizontal orientation
   - Automatic switching every 5 seconds
   - Uses React hooks (useState, useEffect)

3. **Demonstration in App:**
   - Displays vertical traffic light
   - Displays horizontal traffic light
   - Centered across full screen width

---

## Conclusion

During this laboratory work, I successfully:
- Created modular React components
- Mastered working with props and PropTypes
- Implemented component reusability
- Used React hooks for state management
- Added automatic traffic light switching with intervals
- Created realistic visual traffic light effects

Working with components allows creating flexible and scalable interfaces. Using PropTypes helps avoid errors when passing data between components. The useState and useEffect hooks provide powerful tools for managing state and side effects.

---

## References

- GitHub Repository: [link](https://github.com/AndriyVlonha/Lab2_WEB)
- React Documentation: https://react.dev/
- PropTypes Documentation: https://www.npmjs.com/package/prop-types
- Vite Documentation: https://vitejs.dev/
- React Hooks: https://react.dev/reference/react

---
