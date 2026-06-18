//Seletor da Seção About (section)
const about = document.querySelector("#about");

//Função para buscar os dados do Perfil do Github
async function getAboutGithub() {

    try{
        const resposta =await fetch('https://api.github.com/users/PraFlame');
        const perfil = await resposta.json();

        about.innerHTML = '';

        about.innerHTML = `
            <figure class = "about-image">
                <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}">
            </figure>

            <article class="about-content">
                 <h2>Sobre mim</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fuga, animi ducimus minima nisi libero rerum? Unde delectus laudantium incidunt blanditiis, consectetur, laboriosam voluptate rerum dolores eligendi, illo aut ducimus.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem excepturi recusandae suscipit, facere sit sequi pariatur neque doloribus perspiciatis ipsa laborum enim, distinctio repellat unde totam modi, incidunt vitae iste.
                </p>
                <div class="about-buttons-data">
                    <div class="buttons-container">
                        <a href="${perfil.html_url}" target="_blank" class="botao"> Ver GitHub</a>
                        <a href="#" target="_blank" class="botao-outline">Currículo</a>
                    </div>

                    <div class="data-container">
                        <div class="data-item">
                            <span class="data-number">${perfil.followers}</span>
                            <span class="data-label">Seguidores</span>
                        </div>
                        <div class="data-item">
                            <span class="data-number">${perfil.public_repos}</span>
                            <span class="data-label">Repositórios</span>
                        </div>
                    </div>

                </div>
            </article>
        `;
    } catch (error){
        console.error('Erro ao buscar dados do GitHub', error);
    }
    
}

//Executar a função ao carregar o script
getAboutGithub();