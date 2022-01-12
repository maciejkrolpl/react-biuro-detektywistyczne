import React from "react";
import "./biuro.css";
class MainForm extends React.Component {
   render() {
      return (
         <div>
            <div class="search">
               Szukaj <input type="text" />
            </div>

            <div class="main-page">
               <div class="menu">
                  <div class="menu-item">
                     <div class="video-thumbnail"></div>
                     <div class="video-caption">Zdjęcie 1</div>
                  </div>
                  <div class="menu-item">
                     <div class="video-thumbnail"></div>
                     <div class="video-caption">Zdjęcie 2</div>
                  </div>
                  <div class="menu-item">
                     <div class="video-thumbnail"></div>
                     <div class="video-caption">Zdjęcie 3</div>
                  </div>
               </div>

               <div class="content">
                  <div class="form-div">
                     <form
                        action="mailto:macie3k@zohomail.eu"
                        method="POST"
                        enctype="multipart/form-data"
                        name="EmailForm"
                     >
                        <div class="form-header header">
                           Napisz zagubioną rzecz
                        </div>
                        <div class="form-item">
                           <div class="form-label">
                              <label for="input-lost-thing">
                                 Zagubiona rzecz
                              </label>
                           </div>
                           <div class="form-input">
                              <input type="text" id="lost-thing" />
                           </div>
                        </div>
                        <div class="form-item">
                           <label for="input-name">Imię i nazwisko</label>
                           <input type="text" id="name" />
                        </div>
                        <div class="form-item">
                           <label for="input-address">Adres</label>
                           <textarea id="input-address"></textarea>
                        </div>
                        <div class="form-item">
                           <input type="submit" value="Wyślij" />
                        </div>
                     </form>
                  </div>
                  <div class="info">
                     <div class="info-header header">
                        obecnie poszukiwane rzeczy
                     </div>
                     <div class="info-content content">
                        <ol>
                           <li>trzymanka od szczotki do toalety</li>
                           <li>zabawki</li>
                           <li>plecak taty</li>
                        </ol>
                     </div>
                  </div>
               </div>
            </div>

            <div class="footer">Wichrowa 30/6 Wrocław</div>
         </div>
      );
   }
}

export default MainForm;