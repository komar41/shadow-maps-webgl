# Urban Shadow Mapping Visualization

This project aims to implement shadow mapping techniques for urban settings using WebGL. By rendering shadows from directional light sources on 3D city models, we provide a tool for visualizing and analyzing shadow patterns in urban environments. The project incorporates multiple rendering techniques to showcase different aspects of shadow mapping, including perspective and orthographic projections, adjustable light directions, and optional advanced features.

![Shadow Map Example](manhattan_shadow.png)

- **Access this project:** [Link to hosted project if available]
- **GitHub repo:** [Link to GitHub repository]
- **Tools used:** WebGL, JavaScript, HTML, CSS

## Components

### 1. 3D Urban Model Rendering
![3D Urban Model](assignment_2_example.png)
- Renders a 3D city model based on JSON file input
- Supports multiple layers: buildings, water, parks, and surface
- Uses unique buffer and VAO for each layer
- Implements normal-based shading for building sides

### 2. Shadow Mapping
![Manhattan Shadow](manhattan_shadow.png)
- Implements shadow mapping technique for directional light
- Supports both perspective and orthographic projections
- Allows adjustable light direction

### 3. Configuration Panel
- Dropdown menu for projection type selection (perspective/orthographic)
- Slider for adjusting light direction (0-360 degrees)
- Checkbox for toggling shadow map texture display
- File input for loading JSON city models

### 4. Camera Controls
- Interactive camera rotation around the model's centerpoint
- Smooth transitions between different viewpoints

### 5. Optional Shadow Map Visualization
![Shadow Map](shadow_map.png)
- Renders the shadow map texture to screen when enabled

## Interaction Features
- Rotate camera view by moving the mouse around the canvas
- Adjust light direction using the slider
- Toggle between perspective and orthographic projections
- Upload custom city models in JSON format
- Optional: View raw shadow map texture

## Technical Details
- Implements multiple shader programs: ShadowMapProgram, RenderToScreenProgram, LayerProgram
- Uses Framebuffer Objects (FBO) for off-screen rendering
- Supports JSON file parsing for city model data
- Implements matrix operations for view, model, and projection transformations

## Optional Enhancements
- Percentage Closer Filtering (PCF) for smoother shadow edges
- RenderToScreen functionality for displaying shadow map texture

## Data Format
The project uses a specific JSON format for city models, including:
- Coordinates, indices, and colors for buildings, water, parks, and surface layers
- Normal data for building layers

Example JSON structure:
```json
{
    "buildings": {
        "coordinates": [...],
        "indices": [...],
        "normals": [...],
        "color": [r,g,b,a]
    },
    "water": {...},
    "parks": {...},
    "surface": {...}
}
