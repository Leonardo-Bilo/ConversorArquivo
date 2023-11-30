      function convertToJpeg(fileData, resultDiv) {
         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var img = new Image();

         img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            var jpegData = canvas.toDataURL("image/jpeg");
            var downloadLink = createDownloadLink(jpegData, "imagem.jpeg");

            resultDiv.appendChild(downloadLink);
         };

         img.src = fileData;
      }

      function convertToPng(fileData, resultDiv) {
         var canvas = document.createElement("canvas");
         var ctx = canvas.getContext("2d");
         var img = new Image();

         img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);

            var pngData = canvas.toDataURL("image/png");
            var downloadLink = createDownloadLink(pngData, "imagem.png");

            resultDiv.appendChild(downloadLink);
         };

         img.src = fileData;
      }

      function createDownloadLink(fileData, fileName) {
         var downloadLink = document.createElement("a");
         downloadLink.href = fileData;
         downloadLink.download = fileName;
         downloadLink.textContent = "Baixar arquivo convertido";
         downloadLink.classList.add("btn-download");

         return downloadLink;
      }

      function handleConvertButtonClick(event) {
         event.preventDefault();

         var formatSelect = document.getElementById("formatSelect");
         var specificSelect = document.getElementById("specificSelect");
         var fileInput = document.getElementById("fileInput");
         var resultDiv = document.getElementById("result");

         if (formatSelect.value === "" || specificSelect.value === "" || !fileInput.files[0]) {
            alert("Por favor, preencha todos os campos");
            return;
         }

         var file = fileInput.files[0];
         var reader = new FileReader();

         reader.onload = function(event) {
            var fileData = event.target.result;

            if (formatSelect.value === "image") {
               if (specificSelect.value === "jpeg") {
                  convertToJpeg(fileData, resultDiv);
               } else if (specificSelect.value === "png") {
                  convertToPng(fileData, resultDiv);
               } 
            } 
         };

         reader.readAsDataURL(file);
      }

      function handleFormatSelectChange(event) {
         var specificFormat = document.getElementById("specificFormat");

         if (event.target.value === "image") {
            specificFormat.style.display = "block";
            var specificSelect = document.getElementById("specificSelect");
            specificSelect.innerHTML = `
               <option disabled selected value="">Formato</option>
               <option value="jpeg">JPEG</option>
               <option value="png">PNG</option>
            `;
         } 
      }

      var formatSelect = document.getElementById("formatSelect");
      formatSelect.addEventListener("change", handleFormatSelectChange);

      var convertButton = document.getElementById("uploadForm");
      convertButton.addEventListener("submit", handleConvertButtonClick);