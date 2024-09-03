const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML =
            `<div class="info">
                <img src="${user.avatarUrl}" alt="foto do perfil do usuário">
                 <div class="data">
                    <h1>${user.name ?? 'Não possui nome Cadastrado 😕'}</h1>
                    <p>${user.bio ?? 'Não possui bio cadastrado 😕'}</p>
                    <p><i class="fas fa-users"></i></i> Seguidores: ${user.followers}</p>
                    <p><i class="fas fa-users"></i> Seguindo: ${user.following}</p>
                </div>
            </div>`
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens +=
            `<li>
                    <a href="${repo.html_url}"target="_blank">${repo.name}</a>
                        <div class="makers">
                            <ul>
                                <li><i class="fas fa-code-branch"></i> ${repo.forks_count}</li>
                                <li><i class="fas fa-star"></i> ${repo.stargazers_count}</li>
                                <li><i class="fas fa-binoculars"></i> ${repo.watchers}</li>
                                <li><i class="fas fa-code"></i> ${repo.language ?? ''}</li>
                            </ul>
                        </div>
            </li>`)
        
        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
        let eventItens = ''
        user.events.forEach(event => {
            if (event.type === "PushEvent") {
                eventItens += `<li><span>${event.repo.name}</span> - ${event.payload.commits[0].message}</li>`
            } else {
                eventItens += `<li><span>${event.repo.name}</span>  - Sem mensagem de commit</li>`
            }
        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events">
                                                <h2>Eventos</h2>
                                                <ul>${eventItens}</ul>
                                            </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3> Usuário não encontrado</h3>"
    },
}

export { screen }