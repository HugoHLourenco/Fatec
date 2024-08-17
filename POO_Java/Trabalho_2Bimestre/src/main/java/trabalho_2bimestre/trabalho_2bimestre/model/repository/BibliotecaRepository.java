package trabalho_2bimestre.trabalho_2bimestre.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import trabalho_2bimestre.trabalho_2bimestre.model.entities.Biblioteca;

public interface BibliotecaRepository extends JpaRepository<Biblioteca, Long> {
}
