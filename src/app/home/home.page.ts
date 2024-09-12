import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  imageUrl: string | null = null;
  imageDetails: { date: string, time: string } | null = null;

  async takePicture() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt, // Camera or Gallery
      quality: 90,
    });

    // Ensure image.dataUrl is defined before assigning
    if (image?.dataUrl) {
      this.imageUrl = image.dataUrl;

      // Get current date and time
      const currentDate = new Date();
      this.imageDetails = {
        date: currentDate.toLocaleDateString(),
        time: currentDate.toLocaleTimeString(),
      };
    }
  }

  deleteImage() {
    this.imageUrl = null;
    this.imageDetails = null;
  }

  // Add method to handle the "Add" button in the "Other" section
  addOther() {
    console.log("Add other clicked");
    // Add your custom logic here for adding other items
  }

  constructor() {}
}
