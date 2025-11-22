import React, { useState } from "react";

const mediaItems = [
 {
  id: 1,
  title: "Company Logo Pack",
  description: "Download high-resolution logos in multiple formats.",
  fileType: "ZIP",
  fileSize: "2.4 MB",
  downloadLink: "https://zoviz.com/help/download-logo-files?srsltid=AfmBOoqmHnmr65bwo35RYHgsxPfun-6sF8FWXR4lq7042Aq8B8l75ecD#how_to_download_logo",
  formats: [
    {
      label: "PNG",
      size: "500x500",
      link: "https://zoviz.com/help/download-logo-files?srsltid=AfmBOoqmHnmr65bwo35RYHgsxPfun-6sF8FWXR4lq7042Aq8B8l75ecD#how_to_download_logo"
    },
    {
      label: "SVG",
      size: "Scalable",
      link: "https://zoviz.com/help/download-logo-files?srsltid=AfmBOoqmHnmr65bwo35RYHgsxPfun-6sF8FWXR4lq7042Aq8B8l75ecD#how_to_download_logo"
    },
    {
      label: "EPS",
      size: "Vector",
      link: "https://zoviz.com/help/download-logo-files?srsltid=AfmBOoqmHnmr65bwo35RYHgsxPfun-6sF8FWXR4lq7042Aq8B8l75ecD#how_to_download_logo"
    }
  ]
},
 {
  id: 2,
  title: "Brand Guidelines",
  description: "Our official brand guide with fonts, colors, and usage.",
  fileType: "PDF",
  fileSize: "1.2 MB",
  downloadLink: "https://creativesoup.io/pages/one-page-brand-guide",
  formats: [
    {
      label: "PDF",
      size: "1.2 MB",
      link: "https://creativesoup.io/pages/one-page-brand-guide"
    }
  ]
},
 {
  id: 3,
  title: "Product Images",
  description: "High-quality product images for press and marketing.",
  fileType: "ZIP",
  fileSize: "5.8 MB",
  downloadLink: "https://unsplash.com/photos/mlxURH-3y_s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzZ8fFByb2R1Y3QlMjBJbWFnZXN8ZW58MHx8fHwxNzUyODY4Nzk4fDA&force=true",
  formats: [
    {
      label: "JPG (HD)",
      size: "1920x1080",
      link: "https://unsplash.com/photos/mlxURH-3y_s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzZ8fFByb2R1Y3QlMjBJbWFnZXN8ZW58MHx8fHwxNzUyODY4Nzk4fDA&force=true"
    },
    {
      label: "PNG (Transparent)",
      size: "1080x1080",
      link: "https://unsplash.com/photos/mlxURH-3y_s/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzZ8fFByb2R1Y3QlMjBJbWFnZXN8ZW58MHx8fHwxNzUyODY4Nzk4fDA&force=true"
    }
  ]
},
  {
  id: 4,
  title: "Presentation Deck",
  description: "Pitch-ready presentation slides in PPTX and PDF.",
  fileType: "PPTX",
  fileSize: "3.1 MB",
  downloadLink: "https://www.e-iceblue.com/Download/download-presentation-for-net-now.html?_gl=1*qf60il*_up*MQ..*_gs*MQ..*_ga*MTQyMTg1MDk2Ni4xNzUyODY5MTI2*_ga_XLFT57F2BL*czE3NTI4NjkxMjUkbzEkZzAkdDE3NTI4NjkxMjUkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbkCZx0VCPs-QqWMyrKz09lMgD1rQa757CaydH34LJPRJtOnbkE9ATxoCJyMQAvD_BwE&gbraid=0AAAAAD_UCEV4HJqPgxLbY5VXZ8VhSRg81.pptx",
  formats: [
    {
      label: "PPTX",
      size: "3.1 MB",
      link: "https://www.e-iceblue.com/Download/download-presentation-for-net-now.html?_gl=1*qf60il*_up*MQ..*_gs*MQ..*_ga*MTQyMTg1MDk2Ni4xNzUyODY5MTI2*_ga_XLFT57F2BL*czE3NTI4NjkxMjUkbzEkZzAkdDE3NTI4NjkxMjUkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbkCZx0VCPs-QqWMyrKz09lMgD1rQa757CaydH34LJPRJtOnbkE9ATxoCJyMQAvD_BwE&gbraid=0AAAAAD_UCEV4HJqPgxLbY5VXZ8VhSRg81.pptx"
    },
    {
      label: "PDF",
      size: "2.8 MB",
      link: "https://www.e-iceblue.com/Download/download-presentation-for-net-now.html?_gl=1*qf60il*_up*MQ..*_gs*MQ..*_ga*MTQyMTg1MDk2Ni4xNzUyODY5MTI2*_ga_XLFT57F2BL*czE3NTI4NjkxMjUkbzEkZzAkdDE3NTI4NjkxMjUkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbkCZx0VCPs-QqWMyrKz09lMgD1rQa757CaydH34LJPRJtOnbkE9ATxoCJyMQAvD_BwE&gbraid=0AAAAAD_UCEV4HJqPgxLbY5VXZ8VhSRg81"
    }
  ]
},
{
  id: 5,
  title: "Social Media Kit",
  description: "Pre-sized images and templates for Instagram, LinkedIn, and Twitter.",
  fileType: "ZIP",
  fileSize: "4.3 MB",
  downloadLink: "https://unsplash.com/photos/CNbRsQj8mHQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUyODk3OTQ5fA&force=true",
  formats: [
    {
      label: "Instagram Post",
      size: "1080x1080",
      link: "https://unsplash.com/photos/_tF3vug2FhQ/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzUyOTAyMzYxfA&force=true"
    },
    {
      label: "LinkedIn Banner",
      size: "1584x396",
      link: "https://unsplash.com/photos/HBkpnDVc_Ic/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTJ8fHNvY2lhbCUyMG1lZGlhJTIwcGxhdGZvcm18ZW58MHx8fHwxNzUyOTAyNDY1fDA&force=true"
    },
    {
      label: "Twitter Header",
      size: "1500x500",
      link: "https://unsplash.com/photos/I6wCDYW6ij8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTh8fHNvY2lhbCUyMG1lZGlhJTIwcGxhdGZvcm18ZW58MHx8fHwxNzUyOTAyNDY1fDA&force=true"
    }
  ]
},
{
  id: 6,
  title: "Press Release Template",
  description: "Customizable press release template in DOCX and PDF formats.",
  fileType: "DOCX",
  fileSize: "750 KB",
  downloadLink: "https://www.e-iceblue.com/Download/pdf-for-java.html?_gl=1*1ez4vqz*_up*MQ..*_gs*MQ..*_ga*NjAyOTE2MzE3LjE3NTI5MDI2OTk.*_ga_XLFT57F2BL*czE3NTI5MDI2OTgkbzEkZzAkdDE3NTI5MDI2OTgkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbs0roAf5I2ZQrIZcI84_koOodVy2wabVx3QjIlaai4HVvlXRtMzvYBoCQG0QAvD_BwE&gbraid=0AAAAAD_UCEVqcv486kGwB10XaC5Q8ZtrE",
  formats: [
    {
      label: "DOCX",
      size: "750 KB",
      link: "https://www.e-iceblue.com/Download/pdf-for-java.html?_gl=1*1ez4vqz*_up*MQ..*_gs*MQ..*_ga*NjAyOTE2MzE3LjE3NTI5MDI2OTk.*_ga_XLFT57F2BL*czE3NTI5MDI2OTgkbzEkZzAkdDE3NTI5MDI2OTgkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbs0roAf5I2ZQrIZcI84_koOodVy2wabVx3QjIlaai4HVvlXRtMzvYBoCQG0QAvD_BwE&gbraid=0AAAAAD_UCEVqcv486kGwB10XaC5Q8ZtrE"
    },
    {
      label: "PDF",
      size: "820 KB",
      link: "https://www.e-iceblue.com/Download/pdf-for-java.html?_gl=1*1ez4vqz*_up*MQ..*_gs*MQ..*_ga*NjAyOTE2MzE3LjE3NTI5MDI2OTk.*_ga_XLFT57F2BL*czE3NTI5MDI2OTgkbzEkZzAkdDE3NTI5MDI2OTgkajYwJGwwJGgw&gclid=CjwKCAjw4efDBhATEiwAaDBpbs0roAf5I2ZQrIZcI84_koOodVy2wabVx3QjIlaai4HVvlXRtMzvYBoCQG0QAvD_BwE&gbraid=0AAAAAD_UCEVqcv486kGwB10XaC5Q8ZtrE"
    }
  ]
}

];

const MediaKit = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const closeModal = () => setSelectedItem(null);

  return (
    <section className="w-full bg-gray-900 px-4 sm:px-6 py-16 flex justify-center mb-[-30px]">
      <div className="max-w-[1200px] w-full text-center">
        <h2 className="text-yellow-400 text-3xl sm:text-4xl font-extrabold drop-shadow-lg">
          Media Kit
        </h2>
        <p className="mt-4 text-yellow-300 max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-md">
          Everything you need to create professional press releases and marketing materials. Download our official assets here.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-md transition-all duration-300 hover:ring-2 hover:ring-yellow-400"
            >
              <div>
                <h3 className="text-yellow-400 text-lg sm:text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-yellow-300 text-sm sm:text-base">{item.description}</p>
              </div>
              <div className="mt-4 flex items-center justify-between text-yellow-200 text-xs sm:text-sm font-mono">
                <span>{item.fileType}</span>
                <span>{item.formats[item.formats.length - 1]?.size || "Size Unknown"}</span>
              </div>
              <button
                onClick={() => setSelectedItem(item)}
                className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold py-2 px-5 rounded-md shadow transition"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          onClick={closeModal}
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 border border-yellow-400 rounded-xl w-full max-w-md md:max-w-lg lg:max-w-xl p-6 shadow-2xl"
          >
            <h3 className="text-yellow-400 text-xl sm:text-2xl font-bold mb-4">
              Download Options
            </h3>
            <p className="text-yellow-200 mb-6 text-sm sm:text-base">{selectedItem.description}</p>

            <ul className="space-y-4">
              {selectedItem.formats.map((format, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-gray-800 px-4 py-2 rounded-lg hover:bg-gray-700"
                >
                  <div>
                    <p className="text-yellow-300 font-semibold">{format.label}</p>
                    <p className="text-yellow-200 text-xs">{format.size}</p>
                  </div>
                  <a
                    href={format.link}
                    download
                    className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-4 py-1.5 rounded-md text-sm transition"
                  >
                    Download
                  </a>
                </li>
              ))}
            </ul>

            <button
              onClick={closeModal}
              className="mt-6 w-full py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-yellow-300 font-semibold transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MediaKit;
