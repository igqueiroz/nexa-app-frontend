import React from 'react';
import styled from "styled-components"

export default function About (props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <section>
						<div className="row">
							<div className="col-sm-1" />
							<div className="col-sm-10">
								<div className="text-center mt-5 mb-5">
									<ImgLogo  src={require("../images/logotipo.png")}  alt="Nexa Digital" title="Nexa Digital" />
								</div>
								<h1>Sobre a Nexa Digital</h1>
								<p>Somos uma empresa obcecada por mudar a jornada da saúde usando dados e tecnologia para construir uma experiência excepcional.
								</p>
								<p>Os sistemas de saúde criam enormes quantidades de dados diversos e desconectados. Esses dados, muitas vezes não estruturados, têm o potencial de oferecer insights inestimáveis para melhorar a vida das pessoas, mas também apresentam uma grande privacidade e desafios analíticos.
								</p>
								<p>Acreditamos que uma equipe de alto desempenho, com cultura e propósito fortemente alinhados, conduzirá a uma evolução e interrupção ágil no setor de saúde.
								</p>
							</div>
							<div className="col-sm-1" />
						</div>
					</section>
                </div>
            </div>
        </div>
    );
}

const ImgLogo = styled.img`
	width: 200px;
`